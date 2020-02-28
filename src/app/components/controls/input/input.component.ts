import { Component } from '@angular/core';
import { BaseComponent } from '../base-component';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent extends BaseComponent {

  constructor() {
    super();
  }
}
