import { Component, OnInit, Inject } from '@angular/core';
import { MatBottomSheetRef, MAT_BOTTOM_SHEET_DATA, MatBottomSheet } from '@angular/material/bottom-sheet';
import { FormGroup, Validators } from '@angular/forms';
import { FieldItem } from 'src/app/models/field-item';
import { Form } from 'src/app/models/form';
import { FormService } from 'src/app/services/form.service';
import { FieldTypeSelectModalComponent } from '../field-type-select-modal/field-type-select-modal.component';
import { Guid } from 'guid-typescript';
import { FieldItemService } from 'src/app/services/field-item.service';
import { CreateUpdateFieldItems} from 'src/app/mocks/create-edit-field-item.mock';

@Component({
  selector: 'app-field-create-modal',
  templateUrl: './field-create-modal.component.html',
  styleUrls: ['./field-create-modal.component.css']
})
export class FieldCreateModalComponent implements OnInit {

  public formGroup: FormGroup;

  public formItem: Form;

  public fieldItems: FieldItem[];

  constructor(
    private modal: MatBottomSheet,
    @Inject(MAT_BOTTOM_SHEET_DATA) public data: FieldItem,
    private _bottomSheetRef: MatBottomSheetRef<FieldCreateModalComponent>,
    private formService: FormService, private fieldItemService: FieldItemService) {

    this.formGroup = new FormGroup({});

    this.fieldItems = CreateUpdateFieldItems;

    this.formItem = new Form({ name: 'field-create-setting', fieldItems: this.fieldItems });

  }

  ngOnInit() {
    this.formGroup = this.formService.createControl(this.fieldItems);
  }

  backToPreviousList(e) {
    this._bottomSheetRef.dismiss();
    this.modal.open(FieldTypeSelectModalComponent);
  }

  createField(e) {
    let fieldItem: FieldItem = new FieldItem(
      {
        id: Guid.create().toString(),
        name: Guid.create().toString(),
        type: this.data.type,
        inputType: this.data.inputType,
        width: +this.formGroup.get('width').value,
        required: this.formGroup.get('required').value,
        label: this.formGroup.get('name').value,
        hint: this.formGroup.get('hint').value,
        validations: [],
      });
      
    if (fieldItem.required === true) {
      fieldItem.validations.push({
        name: "required",
        validator: Validators.required,
        message: `درج فیلد ${fieldItem.label} اجباری است.`,
      });
    }

    this.fieldItemService.fieldItems.push(fieldItem);
    this.fieldItemService.formItem.fieldItems = this.fieldItemService.fieldItems;
    this.fieldItemService.formGroup =
      this.formService.createControl(this.fieldItemService.fieldItems);

    this._bottomSheetRef.dismiss();
  }

}
