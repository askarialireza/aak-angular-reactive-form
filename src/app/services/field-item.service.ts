import { Injectable } from '@angular/core';
import { FieldItem } from '../models/field-item';
import { FormGroup } from '@angular/forms';
import { Form } from '../models/form';
import { Guid } from 'guid-typescript';

@Injectable({
  providedIn: 'root'
})
export class FieldItemService {
  public formGroup: FormGroup;
  public formItem: Form;
  public fieldItems: FieldItem[];

  constructor() {
    this.formItem = new Form({ id: Guid.create().toString(), isActive: true, isHorizontal: false, editMode:true });
    this.formGroup = new FormGroup({});
    this.fieldItems = [];
  }

  getIndexOfFieldItem(field: FieldItem): number {
    return this.formItem?.fieldItems?.indexOf(field);
  }

  getFieldItemsCount() {
    return this.formItem.fieldItems.length;
  }

  sortFieldItemsByOrder(fieldItems: FieldItem[]) {
    fieldItems.sort((a, b) => (a.order > b.order) ? 1 : -1)
  }

}
