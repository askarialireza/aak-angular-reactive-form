import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Guid } from 'guid-typescript';
import * as Interfaces from '../../interfaces/index';
import * as Models from '../../models/index';

@Injectable({
  providedIn: 'root'
})
export class FieldItemService {
  public formGroup: FormGroup;
  public formItem: Interfaces.Form;
  public fieldItems: Interfaces.BaseFieldItem[];

  constructor() {

    this.formItem = new Models.Form({
      id: Guid.create().toString(),
      formUiSetting: new Models.FormUISetting({
        isEditModeEnabled: true,
        isHorizontalModeEnabled: false
      }),
    });

    this.formGroup = new FormGroup({});

    this.fieldItems = [];
  }

  GetIndexOf(field: Interfaces.BaseFieldItem): number {
    return this.formItem?.fieldItems?.indexOf(field);
  }

  GetFieldItemsLength() {
    if (this.fieldItems) {
      return this.fieldItems.length;
    }
    else {
      return 0;
    }
  }

  GetLastOrder() {
    return this.GetFieldItemsLength() + 1;
  }

  Sort(fieldItems: Interfaces.BaseFieldItem[]) {
    fieldItems?.sort((a, b) => (a.order > b.order) ? 1 : -1)
  }

  PushFieldItem(field: Interfaces.BaseFieldItem) {

    this.fieldItems.push(field);

    this.formItem.fieldItems = this.fieldItems;
    
    this.Sort(this.fieldItems);

  }

}
