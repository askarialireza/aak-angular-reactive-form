import { Component } from '@angular/core';
import { BaseComponent } from '../../../../infrastructure/base-component';

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
