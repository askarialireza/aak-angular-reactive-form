import { Component,EventEmitter, Output } from "@angular/core";
import { BaseComponent } from '../../../infrastructure/base-component';
import * as fas from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.css'],
})


export class DatePickerComponent extends BaseComponent {

  faCalendarAlt = fas.faCalendarAlt;
  faCalendarDay = fas.faCalendarDay;
  faTimes = fas.faTimes;

  @Output() dateSelected: EventEmitter<any> = new EventEmitter<any>();

  constructor() {
    super();
  }

  onDateChanged(e) {
    console.log(e);
  }

}
