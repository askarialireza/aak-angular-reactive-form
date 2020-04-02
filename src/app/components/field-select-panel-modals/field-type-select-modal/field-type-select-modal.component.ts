import { Component, OnInit } from '@angular/core';
import { MatBottomSheet, MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { FieldCreateModalComponent } from '../field-create-modal/field-create-modal.component';
import { FieldTypeSelect } from 'src/app/models/field-type-select';
import { InputGroupFields } from 'src/app/mocks/field-type-select-group.mock';

@Component({
  selector: 'app-field-type-select-modal',
  templateUrl: './field-type-select-modal.component.html',
  styleUrls: ['./field-type-select-modal.component.css']
})
export class FieldTypeSelectModalComponent implements OnInit {

  public fieldSelects: FieldTypeSelect[];

  constructor(
    private textModal: MatBottomSheet,
    private _bottomSheetRef: MatBottomSheetRef<FieldTypeSelectModalComponent>) {

    this.fieldSelects = InputGroupFields;

  }

  ngOnInit() {
  }
  openLink(event: MouseEvent, field: FieldTypeSelect): void {
    this.textModal.open(FieldCreateModalComponent, { data: field.fieldType, panelClass: 'mat-bottom-sheet-custom-container-xlarge' });
  }
}
