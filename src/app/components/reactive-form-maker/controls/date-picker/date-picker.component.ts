import { Component, EventEmitter, Output, Input } from "@angular/core";
import { BaseComponent } from '../../../../infrastructure/base-component';
import * as fas from '@fortawesome/free-solid-svg-icons';
import * as Models from '../../../../exports/model.namespace';

@Component({
  selector: 'app-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.css'],
})


export class DatePickerComponent extends BaseComponent {

  @Input() field: Models.DateFieldItem;
  
  @Output() dateSelected: EventEmitter<any> = new EventEmitter<any>();

  constructor() {
    super();
  }

  onDateChanged(e) {
  }

}
