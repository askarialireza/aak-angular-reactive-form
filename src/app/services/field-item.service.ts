import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Guid } from 'guid-typescript';
import * as Interfaces from '../exports/interface.namespace';
import * as Models from '../exports/model.namespace';

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
      uiSetting: new Models.FormUISetting({
        isEditModeEnabled: true,
        isHorizontalModeEnabled: false
      }),
    });

    this.formGroup = new FormGroup({});

    this.fieldItems = [];
  }

  getIndexOfFieldItem(field: Interfaces.BaseFieldItem): number {
    return this.formItem?.fieldItems?.indexOf(field);
  }

  getFieldItemsCount() {
    return this.formItem.fieldItems.length;
  }

  sortFieldItemsByOrder(fieldItems: Interfaces.BaseFieldItem[]) {
    fieldItems.sort((a, b) => (a.order > b.order) ? 1 : -1)
  }

}
