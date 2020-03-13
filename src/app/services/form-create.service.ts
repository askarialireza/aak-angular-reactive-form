import { Injectable } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { FormCreateItems, FormCreate } from '../mocks/form-create.mock';
import { NgbDate } from '@ng-bootstrap/ng-bootstrap';
import { Mds } from 'mds.persian.datetime';

@Injectable({
  providedIn: 'root'
})
export class FormCreateService {

  public formGroup: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.formGroup = new FormGroup({});
  }

  getFormItem() {
    return FormCreate;
  }
  getFormGroup() {
    return this.formGroup;
  }

  getFieldItems() {
    return FormCreateItems;
  }

  convertNgbDateToDate(ngbDate: NgbDate): Date {

    let dateObject = Mds.PersianDateConverter
      .toGregorian(ngbDate.year, ngbDate.month, ngbDate.day);

    let date = new Date(dateObject.year, dateObject.month, dateObject.day);

    return date;
    
  }

}
