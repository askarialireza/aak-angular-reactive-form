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

  constructor() {

    this.formItem = new Models.Form({
      id: Guid.create().toString(),
      formUiSetting: new Models.FormUISetting({
        isEditModeEnabled: true,
        isHorizontalModeEnabled: false
      }),
      fieldItems: [],
    });

    this.formGroup = new FormGroup({});
  }

  GetById(id: string): Interfaces.BaseFieldItem {
    return this.formItem.fieldItems.find(current => current.id === id);
  }

  GetByIndex(index: number): Interfaces.BaseFieldItem {
    return this.formItem.fieldItems[index];
  }

  GetFieldItems() {
    return this.formItem.fieldItems;
  }

  GetIndexOf(field: Interfaces.BaseFieldItem): number {
    return this.formItem?.fieldItems?.indexOf(field);
  }

  GetFieldItemsCount() {
    if (this.formItem.fieldItems) {
      return this.formItem.fieldItems.length;
    }
    else {
      return 0;
    }
  }

  GetLastOrder() {
    return this.GetFieldItemsCount() + 1;
  }

  SortFieldItemsByOrder(fieldItems: Interfaces.BaseFieldItem[]) {
    fieldItems?.sort((a, b) => (a.order > b.order) ? 1 : -1)
  }

  AddFieldItem(field: Interfaces.BaseFieldItem) {
    this.formItem.fieldItems.push(field);
    this.SortFieldItemsByOrder(this.formItem.fieldItems);
  }

  RemoveFieldItem(field: Interfaces.BaseFieldItem) {
    this.formItem.fieldItems.splice(this.GetIndexOf(field), 1);
    this.formGroup.removeControl(field.name);
    this.SortFieldItemsByOrder(this.formItem.fieldItems);
  }

}
