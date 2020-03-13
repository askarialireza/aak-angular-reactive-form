import { Observable } from 'rxjs';
import { Form } from '../models/form';
import { Injectable } from '@angular/core';
import { FieldItem } from '../models/field-item';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators, FormControl, FormArray, ValidatorFn } from '@angular/forms';
import { BASE_URL } from '../mocks/backend.mock';

@Injectable({
  providedIn: 'root'
})
export class FormService {

  public formGroup: FormGroup;

  public isHorizontalMode: boolean;

  public editModeEnabled: boolean;

  public FormItem: Form;

  constructor(private formBuilder: FormBuilder) {
    this.formGroup = new FormGroup({});
  }

  getFormGroup(): FormGroup {
    return this.formGroup;
  }

  getFormItemName() {
    return this.FormItem.name;
  }

  getFormItemHorizontalMode(form: Form) {
    return form.isHorizontal;
  }

  setFormItenHorizontalMode(form: Form, value: boolean) {
    form.isHorizontal = value;
  }

  getFormItemEditMode() {
    return this.FormItem.editMode;
  }

  setFormItemName(value: string) {
    if (value) {
      this.FormItem.name = value;
    }
  }

  getFormItem(): Form {
    return this.FormItem;
  }

  getFieldItems(): FieldItem[] {
    return this.FormItem.fieldItems;
  }

  getIndexOfFieldItem(field: FieldItem): number {
    return this.FormItem.fieldItems.indexOf(field);
  }

  getFieldItemsCount() {
    return this.FormItem.fieldItems.length;
  }

  sortFieldItemsByOrder(fieldItems: FieldItem[]) {
    fieldItems.sort((a, b) => (a.order > b.order) ? 1 : -1)
  }

  MoveItemNext(fieldItem: FieldItem) {
    let index = this.FormItem.fieldItems.indexOf(fieldItem);
    var temp = this.FormItem.fieldItems.splice(index, 1, this.FormItem.fieldItems[index + 1])[0];
    temp.order++;
    this.FormItem.fieldItems.splice(index + 1, 1, temp);
    this.FormItem.fieldItems[index].order--;
  }

  MoveItemPrevious(fieldItem: FieldItem) {
    let index = this.FormItem.fieldItems.indexOf(fieldItem);
    var temp = this.FormItem.fieldItems.splice(index, 1, this.FormItem.fieldItems[index - 1])[0];
    temp.order--;
    this.FormItem.fieldItems.splice(index - 1, 1, temp);
    this.FormItem.fieldItems[index].order++;
  }

  IncreaseWidth(fieldItem: FieldItem) {

    if (fieldItem) {
      if (fieldItem.width) {
        if (fieldItem.width < 12) {
          this.FormItem.fieldItems.find(current => current.id == fieldItem.id).width++;
        }
      }
    }
  }

  DecreaseWidth(fieldItem: FieldItem) {
    if (fieldItem) {
      if (fieldItem.width) {
        if (fieldItem.width > 1) {
          this.FormItem.fieldItems.find(current => current.id == fieldItem.id).width--;
        }
      }
    }
  }

  addFieldItem(field: FieldItem) {
    if (field) {
      this.FormItem.fieldItems.push(field);
    }

    this.sortFieldItemsByOrder(this.FormItem.fieldItems);

    const control = this.formBuilder.control(
      field.value,
      this.bindValidations(field.validations || [])
    );

    this.formGroup.addControl(field.name, control);
  }

  createControl(fieldItems: FieldItem[]) {
    let group: FormGroup = new FormGroup({});

    fieldItems.forEach(field => {


      if (field.type === "button") {
        return;
      }

      if (field.type === "multicheckbox") {
        if (field.validations) {
          if (field.validations.find(current => current.validator == Validators.required)) {
            group.addControl(field.name, new FormArray([], this.minSelectedCheckboxes(1)));
          }
          else {
            group.addControl(field.name, new FormArray([]));
          }
        }
        else {
          group.addControl(field.name, new FormArray([]));
        }

        field.options.forEach((o, i) => {
          const control = new FormControl(null);
          (group.controls[field.name] as FormArray).push(control);
        });
        return;
      }

      if (field.type === "daterange") {
        group.addControl(field.name, new FormArray([]));

        for (let index = 0; index < 2; index++) {
          const control = new FormControl(null);
          (group.controls[field.name] as FormArray).push(control);
        }

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

  minSelectedCheckboxes(min = 1) {
    let selected = 0;
    const validator: ValidatorFn = (formArray: FormArray) => {
      selected = formArray.controls.filter((x, i) => {
        if (x.value != null) {
          return x.value
        }
      }).length;
      return selected >= min ? null : { required: true };
    };

    return validator;
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

  getColumnClass(form: Form, item: FieldItem) {
    let result = "col-12";
    if (item) {
      if (item.width) {
        let order = form.fieldItems.indexOf(item) + 1;
        form.fieldItems.find(current => current.id == item.id).order = order;
        let classOrder = "order-";
        if (order > 12) {
          classOrder = "order-12";
        }
        else {
          classOrder += order.toString();
        }

        result += ` ${classOrder}`;

        if (this.getFormItemHorizontalMode(form) == false) {
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
