import { Injectable } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { FormCreateItems } from '../mocks/form-create.mock';

@Injectable({
  providedIn: 'root'
})
export class FormCreateService {

  public formGroup: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.formGroup = new FormGroup({});
  }

  getFormGroup() {
    return this.formGroup;
  }

  getFieldItems() {
    return FormCreateItems;
  }

}
