import { Component, OnInit } from '@angular/core';
import {MatBottomSheet, MatBottomSheetRef} from '@angular/material/bottom-sheet';
import { FieldSettingModalComponent } from '../field-setting-modal/field-setting-modal.component';
@Component({
  selector: 'app-field-type-select-modal',
  templateUrl: './field-type-select-modal.component.html',
  styleUrls: ['./field-type-select-modal.component.css']
})
export class FieldTypeSelectModalComponent implements OnInit {

  constructor(private textModal: MatBottomSheet, private _bottomSheetRef: MatBottomSheetRef<FieldTypeSelectModalComponent>) { }

  ngOnInit() {
  }
  openLink(event: MouseEvent): void {
    this.textModal.open(FieldSettingModalComponent);
  }
}
