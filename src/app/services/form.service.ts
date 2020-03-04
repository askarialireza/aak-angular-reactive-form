import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl, FormArray, AbstractControl, ValidatorFn } from '@angular/forms';
import { FieldItem } from '../models/field-item';
import { FormItem, FieldItems } from '../mocks/form.mock';
import { Form } from '../models/form';

@Injectable({
  providedIn: 'root'
})
export class FormService {

  public formGroup: FormGroup;

  public isHorizontalMode: boolean;

  public editModeEnabled: boolean;


  constructor(private formBuilder: FormBuilder) {

    this.formGroup = new FormGroup({});
    this.isHorizontalMode = this.getFormItem().isHorizontal;
    this.editModeEnabled = this.getFormItem().editMode;
  }

  getFormGroup(): FormGroup {
    return this.formGroup;
  }

  getFormItemName() {
    return FormItem.name;
  }

  getFormItemHorizontalMode(form: Form) {
    return form.isHorizontal;
  }

  setFormItenHorizontalMode(form: Form, value: boolean) {
    form.isHorizontal = value;
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

  sortFieldItemsByOrder(fieldItems: FieldItem[]) {
    fieldItems.sort((a, b) => (a.order > b.order) ? 1 : -1)
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

    this.sortFieldItemsByOrder(FormItem.fieldItems);

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

  createControl(fieldItems: FieldItem[]) {
    let group: FormGroup = new FormGroup({});

    fieldItems.forEach(field => {


      if (field.type === "button") {
        return;
      }

      if (field.type === "multicheckbox") {
        if (field.validations.find(current => current.validator == Validators.required)) {
          group.addControl(field.name, new FormArray([], this.minSelectedCheckboxes(1)));
        } else {
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
