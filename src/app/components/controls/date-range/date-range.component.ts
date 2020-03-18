import { Component, Input } from '@angular/core';
import { BaseComponent } from '../../../infrastructure/base-component';
import { FormArray, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-date-range',
  templateUrl: './date-range.component.html',
  styleUrls: ['./date-range.component.css'],
})
export class DateRangeComponent extends BaseComponent {

  constructor() {
    super()

  }

  ngOnInit() {
    this.fromDateControl = (this.group.get(this.field.name) as FormArray).controls[0];
    this.toDateControl = (this.group.get(this.field.name) as FormArray).controls[1];
  }
  public isValid: boolean;
  fromDate: Date;
  toDate: Date;
  fromDateControl: AbstractControl;
  toDateControl: AbstractControl;

  rangeValidation() {
    let result = false;
    if (this.fromDate === null || this.fromDate === undefined && this.toDate === null || this.toDate === undefined) {
      result = false;
    }
    if (this.fromDate && this.toDate === null || this.toDate === undefined) {
      this.fromDateControl.markAsTouched();
      this.toDateControl.setErrors({'incorrect': true});
      result = false;
    }
    if (this.toDate && this.fromDate === null || this.fromDate === undefined) {
      this.toDateControl.markAsTouched();
      this.fromDateControl.setErrors({'incorrect': true});
      result = false;
    }
    if (this.fromDate && this.toDate) {
      if (this.fromDate > this.toDate) {
        this.fromDateControl.markAsTouched();  
        this.toDateControl.markAsTouched(); 
        this.fromDateControl.markAsDirty();
        this.fromDateControl.markAsDirty();
        this.fromDateControl.setErrors(null);
        this.toDateControl.setErrors(null);
        result = false;
      }
      else {
        this.fromDateControl.markAsTouched();  
        this.toDateControl.markAsTouched(); 
        result = true;
      }
    }

    console.log(result);
    return result;
  }

  OnFromDateSelected(e) {
    if (e.value) {
      this.fromDate = e.value._d;
      this.fromDateControl.setValue(this.fromDate.toISOString());
    }
    else {
      this.fromDateControl.setValue(null);
    }

    if(e.value) {
     this.isValid = this.rangeValidation();
    }
  }

  OnEndDateSelected(e) {
    if (e.value) {
      this.toDate = e.value._d;
      this.toDateControl.setValue(this.toDate.toISOString());
    }
    else {
      this.toDateControl.setValue(null);
    }

    if(e.value) {
     this.isValid = this.rangeValidation();
    }
  }
}
