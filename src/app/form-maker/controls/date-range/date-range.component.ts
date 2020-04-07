import { Component, Input } from '@angular/core';
import { BaseComponent } from '../../../infrastructure/base-component';
import * as Models from '../../../models/index';

@Component({
  selector: 'app-date-range',
  templateUrl: './date-range.component.html',
  styleUrls: ['./date-range.component.css'],
})
export class DateRangeComponent extends BaseComponent {

  @Input() field: Models.DateRangeFieldItem;

  constructor() {
    super()

  }

  ngOnInit() {
  }

}
