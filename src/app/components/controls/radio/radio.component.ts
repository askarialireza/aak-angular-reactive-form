import { Component, OnInit, Input } from '@angular/core';
import { BaseComponent } from '../../../infrastructure/base-component';

@Component({
  selector: 'app-radio',
  templateUrl: './radio.component.html',
  styleUrls: ['./radio.component.css']
})
export class RadioComponent extends BaseComponent {

  constructor() { 
    super();
   }

}
