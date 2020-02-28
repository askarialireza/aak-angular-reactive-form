import { Component, OnInit, Input } from '@angular/core';
import { BaseComponent } from '../base-component';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.css']
})
export class CheckboxComponent extends BaseComponent {

  constructor() {
    super();
  }

}
