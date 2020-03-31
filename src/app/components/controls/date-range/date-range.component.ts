import { Component } from '@angular/core';
import { BaseComponent } from '../../../infrastructure/base-component';

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
  }

}
