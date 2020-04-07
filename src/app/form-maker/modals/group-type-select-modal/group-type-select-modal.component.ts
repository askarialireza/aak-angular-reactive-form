import { Component, OnInit, Inject } from '@angular/core';
import { MatBottomSheetRef, MAT_BOTTOM_SHEET_DATA, MatBottomSheet } from '@angular/material/bottom-sheet';
import * as Interfaces from '../../../interfaces/index';
import * as Modals from '../../../form-maker/modals/index';
import * as Mocks from '../../../mocks/field-type-select-group.mock';

export enum GroupType {
  Text = 'text',
  Select = 'select',
  Date = 'date',
  File = 'file',
}

@Component({
  selector: 'app-group-type-select-modal',
  templateUrl: './group-type-select-modal.component.html',
  styleUrls: ['./group-type-select-modal.component.css']
})
export class GroupTypeSelectModalComponent implements OnInit {

  constructor(
    private modal: MatBottomSheet,
    @Inject(MAT_BOTTOM_SHEET_DATA) public data: Interfaces.FieldType,
    private _modalRef: MatBottomSheetRef<GroupTypeSelectModalComponent>
  ) {

  }

  ngOnInit() {
  }

  openItemModal(item: Interfaces.BaseTypeSelect) {

    let type: Interfaces.FieldType;

    switch (item.groupName) {
      case GroupType.Text:
        type = Mocks.TextFieldType;
        break;
      case GroupType.Select:
        type = Mocks.SelectFieldType;
        break;
      case GroupType.Date:
        type = Mocks.DateFieldType;
        break;
    }

    this.modal.open(Modals.FieldTypeSelectModalComponent, { data: type });

    this._modalRef.dismiss();
  }

}
