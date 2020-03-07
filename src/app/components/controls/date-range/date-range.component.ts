import { Component, OnInit, Injectable, Input } from '@angular/core';
import { BaseComponent } from '../base-component';
import { NgbCalendar, NgbDateParserFormatter, NgbDate, NgbDatepickerI18n, NgbDateStruct, NgbCalendarPersian } from '@ng-bootstrap/ng-bootstrap';
import { FormArray, AbstractControl } from '@angular/forms';
import * as fas from '@fortawesome/free-solid-svg-icons';


const WEEKDAYS_SHORT = ['د', 'س', 'چ', 'پ', 'ج', 'ش', 'ی'];
const MONTHS = ['فروردین', 'اردیبهشت', 'خرداد', 'تیر', 'مرداد', 'شهریور', 'مهر', 'آبان', 'آذر', 'دی', 'بهمن', 'اسفند'];

@Injectable()
export class NgbDatepickerI18nPersian extends NgbDatepickerI18n {
  getWeekdayShortName(weekday: number) { return WEEKDAYS_SHORT[weekday - 1]; }
  getMonthShortName(month: number) { return MONTHS[month - 1]; }
  getMonthFullName(month: number) { return MONTHS[month - 1]; }
  getDayAriaLabel(date: NgbDateStruct): string { return `${date.year}-${this.getMonthFullName(date.month)}-${date.day}`; }
}

@Injectable()
export class CustomDateParserFormatter extends NgbDateParserFormatter {

  readonly DELIMITER = '/';

  parse(value: string): NgbDateStruct {
    let result: NgbDateStruct = null;
    if (value) {
      let date = value.split(this.DELIMITER);
      result = {
        day: parseInt(date[0], 10),
        month: parseInt(date[1], 10),
        year: parseInt(date[2], 10)
      };
    }
    return result;
  }

  format(date: NgbDateStruct): string {
    let result: string = null;
    if (date) {
      result = date.year + this.DELIMITER + date.month + this.DELIMITER + date.day;
    }
    return result;
  }
}


@Component({
  selector: 'app-date-range',
  templateUrl: './date-range.component.html',
  styleUrls: ['./date-range.component.css'],
  providers: [
    { provide: NgbCalendar, useClass: NgbCalendarPersian },
    { provide: NgbDatepickerI18n, useClass: NgbDatepickerI18nPersian },
    { provide: NgbDateParserFormatter, useClass: CustomDateParserFormatter }
  ]
})
export class DateRangeComponent extends BaseComponent {

  constructor(private calendar: NgbCalendar, public formatter: NgbDateParserFormatter) {
    super()
    this.isInline = true;
    //this.fromDate = calendar.getToday();
    //this.toDate = calendar.getNext(calendar.getToday(), 'd', 10);
  }

  ngOnInit() {
    this.fromDateControl = (this.group.get(this.field.name) as FormArray).controls[0];
    this.toDateControl = (this.group.get(this.field.name) as FormArray).controls[1];
  }

  @Input() isInline: boolean;

  today = this.calendar.getToday();
  valid: boolean = false;
  hoveredDate: NgbDate;
  fromDate: NgbDate;
  toDate: NgbDate;
  faCalendarAlt = fas.faCalendarAlt;
  faCalendarDay = fas.faCalendarDay;
  faTimes = fas.faTimes;
  fromDateControl: AbstractControl;
  toDateControl: AbstractControl;

  onDateSelection() {

    if (this.fromDate && this.toDate) {
      if (this.toDate.before(this.fromDate)) {
        this.valid = false;
      } else {
        this.valid = true;
      }
    }
    else {
      this.valid = false;
    }
    let object = [
      this.fromDate,
      this.fromDateControl,
      this.toDate,
      this.toDateControl,
      this.valid,
    ]
    console.log(object);
  }

  getValidationError() {

    // let fromDateBoolean: boolean = false;
    // let toDateBoolean: boolean = false;
    // if (this.fromDate !== null || this.fromDate !== undefined) {
    //   fromDateBoolean = true;
    // }
    // if (this.toDate !== null || this.toDate !== undefined) {
    //   toDateBoolean = true
    // }

    // //console.log(fromDateBoolean && toDateBoolean);
    // return (fromDateBoolean && toDateBoolean);
  }

  inputChanged(e) {
    this.group.get(this.field.name).markAsTouched();
  }

  getToday() {
    this.group.get(this.field.name).setValue(this.today);
  }

  OnFromDateSelected(ngbDate: NgbDate) {
    this.fromDate = ngbDate;
    console.log(this.onDateSelection());
    this.fromDateControl.setValue(this.fromDate);
  }

  OnEndDateSelected(ngbDate: NgbDate) {
    this.toDate = ngbDate;
    console.log(this.onDateSelection());
    this.toDateControl.setValue(this.toDate);
  }

  getValidationClass(control: AbstractControl) {
    if (this.valid) {
      return 'is-valid';
    }
    else {
      if (control.invalid && (control.dirty || control.touched)) {
        return 'is-invalid';
      }
    }
  }
}
