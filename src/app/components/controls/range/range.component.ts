import { Component, OnInit, Input } from '@angular/core';
import { FieldItem } from 'src/app/models/field-item';
import { FormGroup } from '@angular/forms';
import { BaseComponent } from '../base-component';

@Component({
  selector: 'app-range',
  templateUrl: './range.component.html',
  styleUrls: ['./range.component.css']
})
export class RangeComponent extends BaseComponent {

  constructor() {
    super();
   }

  ngOnInit() {
  }

}
