import { Component, Injectable, EventEmitter, Output } from "@angular/core";
import { ChangeDetectorRef } from "@angular/core";
import { NgbCalendar, NgbDatepicker, NgbDateAdapter, NgbDateStruct, NgbDateParserFormatter, NgbDatepickerI18n, NgbCalendarPersian, NgbInputDatepicker } from "@ng-bootstrap/ng-bootstrap";
import { BaseComponent } from '../base-component';
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
        day : parseInt(date[0], 10),
        month : parseInt(date[1], 10),
        year : parseInt(date[2], 10)
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
  selector: 'app-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.css'],
  providers: [
    { provide: NgbCalendar, useClass: NgbCalendarPersian },
    { provide: NgbDatepickerI18n, useClass: NgbDatepickerI18nPersian },
    {provide: NgbDateParserFormatter, useClass: CustomDateParserFormatter}
  ]
})


export class DatePickerComponent extends BaseComponent {

  today = this.calendar.getToday();
  faCalendarAlt = fas.faCalendarAlt;
  faCalendarDay = fas.faCalendarDay;
  faTimes = fas.faTimes;

  @Output() dateSelected : EventEmitter<any> = new EventEmitter<any>();

  constructor(private cdRef: ChangeDetectorRef, private calendar: NgbCalendar) {
    super();
  }

  ngAfterViewChecked() {

    this.cdRef.detectChanges();

  }

  getToday() {
    this.group.get(this.field.name).setValue(this.today);
  }

  OnDateSelected(e) {
    console.log(e);
    this.dateSelected.emit(e);
  }
  

}
