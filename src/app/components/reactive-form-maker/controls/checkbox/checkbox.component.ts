import { Component } from '@angular/core';
import { BaseComponent } from '../../../../infrastructure/base-component';

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
