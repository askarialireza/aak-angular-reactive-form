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
    this.isInline = true;
  }

  ngOnInit() {
    this.fromDateControl = (this.group.get(this.field.name) as FormArray).controls[0];
    this.toDateControl = (this.group.get(this.field.name) as FormArray).controls[1];
  }

  @Input() isInline: boolean;

  fromDate: Date;
  toDate: Date;
  fromDateControl: AbstractControl;
  toDateControl: AbstractControl;

  onDateSelection() {
  }

  getValidationError() {
  }

  OnFromDateSelected(e) {
    if(e.value){
      this.fromDate = e.value._d;
      this.fromDateControl.setValue(this.fromDate.toISOString());
    }
    else {
      this.fromDateControl.setValue(null);
    }
  }

  OnEndDateSelected(e) {
    if(e.value){
      this.toDate = e.value._d;
      this.toDateControl.setValue(this.toDate.toISOString());
    }
    else {
      this.toDate = e.value._d;
      this.toDateControl.setValue(null);
    }
  }
}
