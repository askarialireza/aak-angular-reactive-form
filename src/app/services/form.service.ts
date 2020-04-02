import { Form } from '../models/form';
import { Injectable } from '@angular/core';
import { FieldItem } from '../models/field-item';
import { FormBuilder, FormGroup, Validators, FormControl, FormArray, ValidatorFn } from '@angular/forms';


@Injectable({
  providedIn: 'root'
})
export class FormService {

  public formGroup: FormGroup;

  public formItem: Form;

  public isHorizontalModeEnabled: boolean;

  public isEditModeEnabled: boolean;

  public showJsonCode: boolean;

  constructor(private formBuilder: FormBuilder) {
    this.formGroup = new FormGroup({});
    this.showJsonCode = false;
  }

  getFormGroup(): FormGroup {
    return this.formGroup;
  }

  getFormItemName() {
    return this.formItem.name;
  }

  getFormItemHorizontalMode(form: Form) {
    return form.isHorizontal;
  }

  setFormItenHorizontalMode(form: Form, value: boolean) {
    form.isHorizontal = value;
  }

  getFormItemEditMode() {
    return this.formItem.editMode;
  }

  setFormItemName(value: string) {
    if (value) {
      this.formItem.name = value;
    }
  }

  getFormItem(): Form {
    return this.formItem;
  }

  getFieldItems(): FieldItem[] {
    return this.formItem.fieldItems;
  }

  sortFieldItemsByOrder(fieldItems: FieldItem[]) {
    fieldItems.sort((a, b) => (a.order > b.order) ? 1 : -1)
  }

  // addFieldItem(field: FieldItem) {
  //   if (field) {
  //     this.formItem.fieldItems.push(field);
  //   }

  //   this.sortFieldItemsByOrder(this.formItem.fieldItems);

  //   const control = this.formBuilder.control(
  //     field.value,
  //     this.bindValidations(field.validations || [])
  //   );

  //   this.formGroup.addControl(field.name, control);
  // }

  createControl(fieldItems: FieldItem[]) {

    let group: FormGroup = new FormGroup({});

    fieldItems.forEach(field => {


      if (field.type === "button") {

        return;

      }

      if (field.type === "multicheckbox") {

        if (field.required) {
          group.addControl(field.name, new FormArray([], this.minSelectedCheckboxes(1)));
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

      const control = this.formBuilder.control(field.value, this.bindValidations(field.validations || []));

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
    if (item.width) {

      if (form?.isHorizontal == false) {

        result += ` col-md-${item.width.toString()}`;

      }

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

      return result;
    }
    else {

      return null;
      
    }
  }



}
