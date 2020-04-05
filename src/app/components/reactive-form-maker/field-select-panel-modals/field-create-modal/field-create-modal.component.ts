import { FormGroup, Validators } from '@angular/forms';
import { Component, OnInit, Inject } from '@angular/core';
import { MatBottomSheetRef, MAT_BOTTOM_SHEET_DATA, MatBottomSheet } from '@angular/material/bottom-sheet';
import * as Services from '../../../../exports/service.namespace';
import * as Interfaces from '../../../../exports/interface.namespace';

@Component({
  selector: 'app-field-create-modal',
  templateUrl: './field-create-modal.component.html',
  styleUrls: ['./field-create-modal.component.css']
})
export class FieldCreateModalComponent implements OnInit {

  public formGroup: FormGroup;

  public formItem: Interfaces.Form;

  public fieldItems: Interfaces.BaseFieldItem[];

  constructor(
    private modal: MatBottomSheet,
    @Inject(MAT_BOTTOM_SHEET_DATA) public data: { group: string, type: string, fieldItem: Interfaces.BaseFieldItem },
    private _bottomSheetRef: MatBottomSheetRef<FieldCreateModalComponent>,
    private formService: Services.FormService, private fieldItemService: Services.FieldItemService) {
  }

  ngOnInit() {
  }

  backToPreviousList(e) {

  }

  createField(e) {
  }

}
