import { Injectable } from '@angular/core';
import * as Services from '../exports/service.namespace';
import * as Interfaces from '../exports/interface.namespace';
import * as Models from '../exports/model.namespace';
import { FormBuilder, FormGroup, FormControl, FormArray, Validators, } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class FormService {

  public formGroup: FormGroup;

  public formItem: Interfaces.Form;

  public isHorizontalModeEnabled: boolean;

  public isEditModeEnabled: boolean;

  public showJsonCode: boolean;

  constructor(private formBuilder: FormBuilder, private fieldValidationService: Services.FieldValidationService) {
    this.formGroup = new FormGroup({});
    this.showJsonCode = false;
  }

  // getFormGroup(): FormGroup {
  //   return this.formGroup;
  // }

  getFormItemName() {
    return this.formItem.name;
  }

  getFormItemHorizontalMode(form: Interfaces.Form) {
    return form.uiSetting.isHorizontalModeEnabled;
  }

  setFormItenHorizontalMode(form: Interfaces.Form, value: boolean) {
    form.uiSetting.isHorizontalModeEnabled = value;
  }

  getFormItemEditMode() {
    return this.formItem.uiSetting.isEditModeEnabled;
  }

  setFormItemName(value: string) {
    if (value) {
      this.formItem.name = value;
    }
  }

  getFormItem(): Interfaces.Form {
    return this.formItem;
  }

  getFieldItems(): Interfaces.BaseFieldItem[] {
    return this.formItem.fieldItems;
  }

  sortFieldItemsByOrder(fieldItems: Interfaces.BaseFieldItem[]) {
    return fieldItems.sort((a, b) => (a.order > b.order) ? 1 : -1)
  }

  createControl(fieldItems: Interfaces.BaseFieldItem[]) {

    fieldItems = this.sortFieldItemsByOrder(fieldItems);

    let group: FormGroup = new FormGroup({});

    fieldItems.forEach(field => {


      if (field.type === "button") {

        return;

      }

      if (field.type === "multicheckbox") {

        if (field.required) {
          group.addControl(field.name, new FormArray([], this.fieldValidationService.minSelectedCheckboxes(1)));
        }
        else {
          group.addControl(field.name, new FormArray([]));
        }

        (field as Interfaces.OptionFieldItem).options.forEach((o, i) => {
          const control = new FormControl(null);
          (group.controls[field.name] as FormArray).push(control);
        });

        return;
      }

      if (field.type === 'option') {
        group.addControl(field.name, new FormArray([]));

        (field as Interfaces.OptionFieldItem).options.forEach((o, i) => {
          const control = new FormControl(null, Validators.required);
          (group.controls[field.name] as FormArray).push(control);
        });

        return;
      }

      const control = this.formBuilder.control(field.value, this.fieldValidationService.bindValidations(field.validations || []));

      group.addControl(field.name, control);

    });

    return group;
  }

  getColumnClass(form: Interfaces.Form, item: Interfaces.BaseFieldItem) {
    let result = "col-12";
    if (item.width) {

      if (form?.uiSetting.isHorizontalModeEnabled == false) {

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
