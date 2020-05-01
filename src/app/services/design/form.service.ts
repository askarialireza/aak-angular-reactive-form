import { Injectable } from '@angular/core';
import * as Services from '../../services/index';
import * as Interfaces from '../../interfaces/index';
import { FormBuilder, FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { MultiChoiceFieldItem } from './../../models/field-item/multi-choice-field-item.model';

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
    return form.formUiSetting.isHorizontalModeEnabled;
  }

  setFormItenHorizontalMode(form: Interfaces.Form, value: boolean) {
    form.formUiSetting.isHorizontalModeEnabled = value;
  }

  getFormItemEditMode() {
    return this.formItem.formUiSetting.isEditModeEnabled;
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

  CreateControls(fieldItems: Interfaces.BaseFieldItem[]) {
    fieldItems = this.sortFieldItemsByOrder(fieldItems);
    const group: FormGroup = new FormGroup({});
    
    fieldItems.forEach(field => {
      if (field.type === 'button') { return; }
      if (field.type === 'multicheckbox' || field.type === 'multitoggle') {
        (field.required) ?
          group.addControl(field.name, new FormArray([], this.fieldValidationService.minSelectedCheckboxes((field as MultiChoiceFieldItem).minSelected))) :
          group.addControl(field.name, new FormArray([]));
        (field as Interfaces.OptionFieldItem).options.forEach((o, i) => {
          const formControl = new FormControl(null);
          (group.controls[field.name] as FormArray).push(formControl);
        });      
        return;
      }

      if (field.type === 'option') {
        group.addControl(field.name, new FormArray([]));
        (field as Interfaces.OptionFieldItem).options.forEach((o, i) => {
          const formControl = new FormControl(null, Validators.required);
          (group.controls[field.name] as FormArray).push(formControl);
        });
        return;
      }

      const control = this.formBuilder.control(field.value, this.fieldValidationService.bindValidations(field.validations || []));
      group.addControl(field.name, control);
    });
    return group;
  }

  getColumnClass(form: Interfaces.Form, item: Interfaces.BaseFieldItem) {
    let result = 'col-12';
    if (item.width) {
      if (form?.formUiSetting.isHorizontalModeEnabled === false) { result += ` col-md-${item.width.toString()}`; }
      const order = form.fieldItems.indexOf(item) + 1;
      form.fieldItems.find(current => current.id === item.id).order = order;
      let classOrder = 'order-';
      classOrder = (order > 12) ? 'order-12' : classOrder + order.toString();;
      result += ` ${classOrder}`;
      return result;
    }
    else {
      return null;
    }
  }
}
