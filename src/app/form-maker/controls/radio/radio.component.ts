import { Component, Input } from '@angular/core';
import { BaseComponent } from '../../../infrastructure/base-component';
import * as Models from '../../../models/index';

@Component({
  selector: 'app-radio',
  templateUrl: './radio.component.html',
  styleUrls: ['./radio.component.css']
})
export class RadioComponent extends BaseComponent {

  @Input() field: Models.RadioFieldItem;

  constructor() { 
    super();
   }

}
