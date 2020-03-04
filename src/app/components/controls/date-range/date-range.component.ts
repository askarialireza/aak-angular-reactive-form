import { Component, OnInit, Injectable } from '@angular/core';
import { BaseComponent } from '../base-component';
import { NgbCalendar, NgbDateParserFormatter, NgbDate, NgbDatepickerI18n, NgbDateStruct, NgbCalendarPersian } from '@ng-bootstrap/ng-bootstrap';
import { FormArray } from '@angular/forms';
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
    //this.fromDate = calendar.getToday();
    //this.toDate = calendar.getNext(calendar.getToday(), 'd', 10);
  }

  ngOnInit() {
    
  }

  hoveredDate: NgbDate;
  fromDate: NgbDate;
  toDate: NgbDate;
  faCalendarAlt = fas.faCalendarAlt;
  hasError:boolean = false;

  onDateSelection(date: NgbDate) {
    const formArray: FormArray = this.group.get(this.field.name) as FormArray;
    this.group.get(this.field.name).markAsTouched();
    if (!this.fromDate && !this.toDate) {
      this.fromDate = date;
    } else if (this.fromDate && !this.toDate && date.after(this.fromDate)) {
      this.toDate = date;
    } else {
      this.toDate = null;
      this.fromDate = date;
    }
    this.hasError = this.getValidationError();
    console.log(formArray.controls[0],formArray.controls[1]);
  }

  isHovered(date: NgbDate) {
    return this.fromDate && !this.toDate && this.hoveredDate && date.after(this.fromDate) && date.before(this.hoveredDate);
  }

  isInside(date: NgbDate) {
    return date.after(this.fromDate) && date.before(this.toDate);
  }

  isRange(date: NgbDate) {
    return date.equals(this.fromDate) || date.equals(this.toDate) || this.isInside(date) || this.isHovered(date);
  }

  validateInput(currentValue: NgbDate, input: string): NgbDate {
    const parsed = this.formatter.parse(input);
    return parsed && this.calendar.isValid(NgbDate.from(parsed)) ? NgbDate.from(parsed) : currentValue;
  }

  getValidationError() {

    let fromDateBoolean: boolean = false;
    let toDateBoolean: boolean = false;
    if (this.fromDate !== null || this.fromDate !== undefined) {
      fromDateBoolean = true;
    }
    if (this.toDate !== null || this.toDate !== undefined) {
      toDateBoolean = true
    }

    console.log(fromDateBoolean && toDateBoolean);
    return (fromDateBoolean && toDateBoolean);
  }

  inputChanged(e) {
    this.group.get(this.field.name).markAsTouched();
  }

}
