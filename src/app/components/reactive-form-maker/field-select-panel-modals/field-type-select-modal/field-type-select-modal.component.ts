import { Component, OnInit, Inject } from '@angular/core';
import { MatBottomSheet, MatBottomSheetRef, MAT_BOTTOM_SHEET_DATA } from '@angular/material/bottom-sheet';
import { FieldCreateModalComponent } from '../field-create-modal/field-create-modal.component';
import { FieldTypeSelect } from '../../../../models/field-type-select';
import { InputGroupFields } from '../../../../mocks/field-type-select-group.mock';

export enum GroupType {
  Text = 'text',
  Select = 'select',
  Date = 'date',
  File = 'file',
}

@Component({
  selector: 'app-field-type-select-modal',
  templateUrl: './field-type-select-modal.component.html',
  styleUrls: ['./field-type-select-modal.component.css']
})
export class FieldTypeSelectModalComponent implements OnInit {

  public fieldSelects: FieldTypeSelect[];

  private group: GroupType;

  constructor(
    private textModal: MatBottomSheet,
    @Inject(MAT_BOTTOM_SHEET_DATA) public data: string,
    private _bottomSheetRef: MatBottomSheetRef<FieldTypeSelectModalComponent>) {
    
    switch (data) {
      case GroupType.Text:
        this.fieldSelects = InputGroupFields;
        break;
    
      default:
        break;
    }

    

  }

  ngOnInit() {
  }
  openLink(event: MouseEvent, field: FieldTypeSelect): void {
    this.textModal.open(FieldCreateModalComponent, { data: field.fieldType, panelClass: 'mat-bottom-sheet-custom-container-xlarge' });
  }
}
