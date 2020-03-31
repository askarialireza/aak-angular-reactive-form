import { Component, OnInit } from '@angular/core';
import { MatBottomSheetRef } from '@angular/material/bottom-sheet';

@Component({
  selector: 'app-field-setting-modal',
  templateUrl: './field-setting-modal.component.html',
  styleUrls: ['./field-setting-modal.component.css']
})
export class FieldSettingModalComponent implements OnInit {

  constructor(private _bottomSheetRef: MatBottomSheetRef<FieldSettingModalComponent>) { }

  ngOnInit() {
  }

}
