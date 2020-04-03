import { Component, OnInit, Inject } from '@angular/core';
import { MatBottomSheetRef, MAT_BOTTOM_SHEET_DATA, MatBottomSheet } from '@angular/material/bottom-sheet';
import { FormGroup, Validators } from '@angular/forms';
import { FieldItem } from '../../../../models/field-item';
import { Form } from '../../../../models/form';
import { FormService } from '../../../../services/form.service';
import { FieldItemService } from '../../../../services/field-item.service';
import { CreateUpdateFieldItems } from '../../../../mocks/create-edit-field-item.mock';

@Component({
  selector: 'app-field-edit-modal',
  templateUrl: './field-edit-modal.component.html',
  styleUrls: ['./field-edit-modal.component.css']
})
export class FieldEditModalComponent implements OnInit {

  public formGroup: FormGroup;

  public formItem: Form;

  public fieldItems: FieldItem[];

  constructor(
    private modal: MatBottomSheet,
    @Inject(MAT_BOTTOM_SHEET_DATA) public data: FieldItem,
    private _bottomSheetRef: MatBottomSheetRef<FieldEditModalComponent>,
    private formService: FormService, private fieldItemService: FieldItemService) {

    this.formGroup = new FormGroup({});

    this.fieldItems = CreateUpdateFieldItems;

    this.fieldItems.find(current => current.id == 'name').value = this.data.label || null;
    this.fieldItems.find(current => current.id == 'hint').value = this.data.hint || null;
    this.fieldItems.find(current => current.id == 'required').value = this.data.required || false;
    this.fieldItems.find(current => current.id == 'width').value = this.data.width || 12;

    this.formItem = new Form({ name: 'field-create-setting', fieldItems: this.fieldItems });

  }

  ngOnInit() {
    this.formGroup = this.formService.createControl(this.fieldItems);
  }

  formatLabel(value: number) {
    return Math.round((value / 12) * 100) + '%';
  }

  dismiss() {
    this._bottomSheetRef.dismiss();
  }

  editField(e) {

    this.fieldItemService.formItem.fieldItems
      .find(current => current.id == this.data.id)
      .width = this.formGroup.get('width').value;

    this.fieldItemService.formItem.fieldItems
      .find(current => current.id == this.data.id)
      .required = this.formGroup.get('required').value;

    this.fieldItemService.formItem.fieldItems
      .find(current => current.id == this.data.id)
      .label = this.formGroup.get('name').value;

    this.fieldItemService.formItem.fieldItems
      .find(current => current.id == this.data.id)
      .hint = this.formGroup.get('hint').value;

    if (this.fieldItemService.formItem.fieldItems.find(current => current.id == this.data.id).required) {
      this.fieldItemService.formItem.fieldItems
        .find(current => current.id == this.data.id)
        .validations = [
          {
            name: "required",
            validator: Validators.required,
            message: `درج فیلد ${this.fieldItemService.formItem.fieldItems.find(current => current.id == this.data.id).label} اجباری است.`,
          }
        ];
    }
    else {
      this.fieldItemService.formItem.fieldItems
        .find(current => current.id == this.data.id)
        .validations = null;
    }

    this.fieldItemService.formGroup =
      this.formService.createControl(this.fieldItemService.formItem.fieldItems);

    this._bottomSheetRef.dismiss();
  }
}
