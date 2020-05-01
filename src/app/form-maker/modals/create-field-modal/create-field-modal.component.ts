import { Component, OnInit, Inject } from '@angular/core';
import * as Interfaces from '../../../interfaces/index';
import * as Models from '../../../models/index';
import * as Services from '../../../services/index';
import * as Modals from '../../../form-maker/modals/index';
import { createOrUpdateFieldItems, textAreaTypeSelectFieldItem, optionTypeSelectFieldItem } from '../../../mocks/create-edit-field-item.mock';
import { FormGroup } from '@angular/forms';
import { MatBottomSheet, MAT_BOTTOM_SHEET_DATA, MatBottomSheetRef } from '@angular/material/bottom-sheet';
import * as Mocks from '../../../mocks/field-type-select-group.mock';

export enum GroupType {
  Text = 'text',
  Select = 'select',
  Date = 'date',
  File = 'file',
}

@Component({
  selector: 'app-create-field-modal',
  templateUrl: './create-field-modal.component.html',
  styleUrls: ['./create-field-modal.component.css']
})
export class CreateFieldModalComponent implements OnInit {

  public formGroup: FormGroup;

  public formItem: Interfaces.Form;

  public fieldItems: Interfaces.BaseFieldItem[];

  constructor(
    @Inject(MAT_BOTTOM_SHEET_DATA)
    public data: Interfaces.FieldTypeSelect,
    private _modalRef: MatBottomSheetRef<CreateFieldModalComponent>,
    private modal: MatBottomSheet,
    private formService: Services.FormService,
    private fieldItemService: Services.FieldItemService
  ) {

    this.formGroup = new FormGroup({});

    this.fieldItems = [];

    createOrUpdateFieldItems.map(item => {
      this.fieldItems.push(item);
    });

    if (data.type === 'textarea') {
      this.fieldItems.push(textAreaTypeSelectFieldItem);
    }

    if (data.type === 'select') {

      optionTypeSelectFieldItem.map(item => {
        this.fieldItems.push(item);
      });

    }

    this.formGroup = this.formService.createControl(this.fieldItems);

    this.formItem = new Models.Form({ fieldItems: this.fieldItems });
  }

  ngOnInit() {
  }

  BackToPreviousList() {

    let type: Interfaces.FieldType;

    switch (this.data.groupName) {
      case GroupType.Text:
        type = Mocks.TextFieldType;
        break;
      case GroupType.Select:
        type = Mocks.SelectFieldType;
        break;
      case GroupType.Date:
        type = Mocks.DateFieldType;
        break;
    }

    this.modal.open(Modals.FieldTypeSelectModalComponent, { data: type });

    this._modalRef.dismiss();
  }

  CreateField() {
    let fieldItem: Interfaces.BaseFieldItem =
      new Models.BaseFieldItem({
        width: this.formGroup.get('width').value,
        required: this.formGroup.get('required').value,
        placeholder: this.formGroup.get('placeholder').value,
        label: this.formGroup.get('name').value,
        hint: this.formGroup.get('hint').value,
        order: this.fieldItemService.GetLastOrder(),
      });

    if (this.data.type === 'textarea') {
      switch (this.formGroup.get('textarea-type').value) {
        case 'textarea':
          fieldItem = new Models.TextareaFieldItem(fieldItem);
          break;
        case 'summernote':
          fieldItem = new Models.SummernoteFieldItem(fieldItem);
          break;
      }
    }

    if (this.data.type === 'input') {
      fieldItem = new Models.InputFieldItem(fieldItem);
    }

    if (this.data.type === 'select') {
      fieldItem = new Models.OptionableFieldItem(fieldItem);
      const array: string[] = this.formGroup.get('options').value;
      const options: Models.Option[] = [];

      array.map(item => {
        const option = new Models.Option({ value: item });
        options.push(option);
      });

      (fieldItem as Models.OptionableFieldItem).options = options;

      switch (this.formGroup.get('select-type').value) {
        case 'select':
          fieldItem = new Models.SelectFieldItem(fieldItem);
          break;
        case 'radio':
          fieldItem = new Models.RadioFieldItem(fieldItem);
          break;
      }
    }

    this.fieldItemService.AddFieldItem(fieldItem);

    this.fieldItemService.formGroup =
      this.formService.createControl(this.fieldItemService.GetFieldItems());

    this._modalRef.dismiss();
  }
}
