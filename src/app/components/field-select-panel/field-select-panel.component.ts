import { Component, OnInit } from '@angular/core';
import { MatBottomSheet, MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { FieldTypeSelectModalComponent } from '../field-select-panel-modals/field-type-select-modal/field-type-select-modal.component';

@Component({
  selector: 'app-field-select-panel',
  templateUrl: './field-select-panel.component.html',
  styleUrls: ['./field-select-panel.component.css']
})
export class FieldSelectPanelComponent implements OnInit {

  constructor(private textModal: MatBottomSheet) { }

  ngOnInit() {
  }

  openTextModal() {
    this.textModal.open(FieldTypeSelectModalComponent);
  }
}
