import { Component, Input } from '@angular/core';
import { BaseComponent } from '../../../infrastructure/base-component';
import { FormArray, AbstractControl, Validators } from '@angular/forms';
import * as $ from 'jquery';

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
