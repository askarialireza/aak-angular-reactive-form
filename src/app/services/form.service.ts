import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FieldItem } from '../models/field-item';
import { FormItem, FieldItems } from '../mocks/form.mock.ts';
import { Form } from '../models/form';

@Injectable({
  providedIn: 'root'
})
export class FormService {

  public formGroup: FormGroup;

  constructor(private formBuilder: FormBuilder) {

    this.formGroup = new FormGroup({});

  }

  getFormGroup(): FormGroup {
    return this.formGroup;
  }

  getFormItemName() {
    return FormItem.name;
  }

  getFormItemHorizontalMode() {
    return FormItem.isHorizontal;
  }

  setFormItenHorizontalMode(value: boolean) {
    FormItem.isHorizontal = value;
  }

  getFormItemEditMode() {
    return FormItem.editMode;
  }

  setFormItemName(value: string) {
    if (value) {
      FormItem.name = value;
    }
  }

  getFormItem(): Form {
    return FormItem;
  }

  getFieldItems(): FieldItem[] {
    return FormItem.fieldItems;
  }

  getIndexOfFieldItem(field: FieldItem): number {
    return FormItem.fieldItems.indexOf(field);
  }

  getFieldItemsCount() {
    return FormItem.fieldItems.length;
  }

  sortFieldItemsByOrder() {
    FormItem.fieldItems.sort((a, b) => (a.order > b.order) ? 1 : -1)
  }

  MoveItemNext(fieldItem: FieldItem) {
    let index = FormItem.fieldItems.indexOf(fieldItem);
    var temp = FormItem.fieldItems.splice(index, 1, FormItem.fieldItems[index + 1])[0];
    temp.order++;
    FormItem.fieldItems.splice(index + 1, 1, temp);
    FormItem.fieldItems[index].order--;
  }

  MoveItemPrevious(fieldItem: FieldItem) {
    let index = FormItem.fieldItems.indexOf(fieldItem);
    var temp = FormItem.fieldItems.splice(index, 1, FormItem.fieldItems[index - 1])[0];
    temp.order--;
    FormItem.fieldItems.splice(index - 1, 1, temp);
    FormItem.fieldItems[index].order++;
  }

  IncreaseWidth(fieldItem: FieldItem) {

    if (fieldItem) {
      if (fieldItem.width) {
        if (fieldItem.width < 12) {
          FormItem.fieldItems.find(current => current.id == fieldItem.id).width++;
        }
      }
    }
  }

  DecreaseWidth(fieldItem: FieldItem) {
    if (fieldItem) {
      if (fieldItem.width) {
        if (fieldItem.width > 1) {
          FormItem.fieldItems.find(current => current.id == fieldItem.id).width--;
        }
      }
    }
  }

  addFieldItem(field: FieldItem) {
    if (field) {
      FormItem.fieldItems.push(field);
    }

    this.sortFieldItemsByOrder();

    const control = this.formBuilder.control(
      field.value,
      this.bindValidations(field.validations || [])
    );

    this.formGroup.addControl(field.name, control);
  }

  deleteFieldItem(field: FieldItem) {
    FormItem.fieldItems.splice(FormItem.fieldItems.indexOf(field), 1);

    this.formGroup.removeControl(field.name);
  }

  createControl() {
    let group: FormGroup = new FormGroup({});

    FormItem.fieldItems.forEach(field => {


      if (field.type === "button") {
        return;
      }

      const control = this.formBuilder.control(
        field.value,
        this.bindValidations(field.validations || [])
      );

      group.addControl(field.name, control);

    });

    return group;
  }

  bindValidations(validations: any) {

    if (validations.length > 0) {

      const validList = [];

      validations.forEach(valid => {
        validList.push(valid.validator);
      });

      return Validators.compose(validList);
    }
    return null;
  }

  getColumnClass(item: FieldItem) {
    let result = "col-12";
    if (item) {
      if (item.width) {
        let order = FieldItems.indexOf(item) + 1;
        FieldItems.find(current => current.id == item.id).order = order;
        let classOrder = "order-";
        if (order > 12) {
          classOrder = "order-12";
        }
        else {
          classOrder += order.toString();
        }

        result += ` ${classOrder}`;

        if (this.getFormItemHorizontalMode() == false){
          result += ` col-md-${item.width.toString()}`;
        }

        return result;
      }
      else {
        return null;
      }
    }
  }

}
