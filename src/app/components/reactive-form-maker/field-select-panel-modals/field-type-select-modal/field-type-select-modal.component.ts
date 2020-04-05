import { Component, OnInit, Inject } from '@angular/core';
import { MatBottomSheet, MatBottomSheetRef, MAT_BOTTOM_SHEET_DATA } from '@angular/material/bottom-sheet';
import { FieldTypeSelect } from '../../../../models/field-type-select';
import { FieldType } from '../../../../models/type-select/field-type';

export enum GroupType {
  Text = 'text',
  Select = 'select',
  Date = 'date',
  File = 'file',
  Create = 'create',
}

@Component({
  selector: 'app-field-type-select-modal',
  templateUrl: './field-type-select-modal.component.html',
  styleUrls: ['./field-type-select-modal.component.css']
})
export class FieldTypeSelectModalComponent implements OnInit {

  constructor(
    private textModal: MatBottomSheet,
    @Inject(MAT_BOTTOM_SHEET_DATA) public data: FieldType,
    private _bottomSheetRef: MatBottomSheetRef<FieldTypeSelectModalComponent>) {
  }

  ngOnInit() {
  }

  openItemModal(event: MouseEvent, field: FieldTypeSelect): void {
    // if (!field.fieldItem) {
    //   switch (field.group) {
    //     case GroupType.Text:
    //       this.textModal.open(FieldTypeSelectModalComponent, { data: TextFieldType });
    //       this._bottomSheetRef.dismiss();
    //       break;
    //     case GroupType.Select:
    //       this.textModal.open(FieldTypeSelectModalComponent, { data: SelectFieldType });
    //       this._bottomSheetRef.dismiss();
    //       break;
    //     default:
    //       break;
    //   }
    // }
    
    // else {
    //   this.textModal.open(FieldCreateModalComponent, { data: { group: field.group, type: field.type, fieldItem: field.fieldItem }, panelClass: 'mat-bottom-sheet-custom-container-xlarge' });
    //   this._bottomSheetRef.dismiss();
    // }


  }

}
