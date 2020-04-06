import { Component, OnInit, Inject } from '@angular/core';
import { MatBottomSheet, MAT_BOTTOM_SHEET_DATA, MatBottomSheetRef } from '@angular/material/bottom-sheet';
import * as Interfaces from '../../../../exports/interface.namespace';
import * as Modals from '../../../../exports/modal.namespace';

@Component({
  selector: 'app-field-type-select-modal',
  templateUrl: './field-type-select-modal.component.html',
  styleUrls: ['./field-type-select-modal.component.css']
})
export class FieldTypeSelectModalComponent implements OnInit {

  constructor(
    private modal: MatBottomSheet,
    @Inject(MAT_BOTTOM_SHEET_DATA) public data: Interfaces.FieldType,
    private _modalRef: MatBottomSheetRef<FieldTypeSelectModalComponent>
  ) { }

  ngOnInit() {
  }

  openItemModal(item: Interfaces.FieldTypeSelect) {
    this.modal.open(Modals.CreateFieldModalComponent, { data: item, panelClass: 'mat-bottom-sheet-custom-container-xlarge' });
    this._modalRef.dismiss();
  }
}
