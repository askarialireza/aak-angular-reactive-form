import { Component, EventEmitter, Output, Input } from "@angular/core";
import { BaseComponent } from '../../../infrastructure/base-component';
import * as Models from '../../../models/index';

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
