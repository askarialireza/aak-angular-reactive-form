import { Component, Input } from '@angular/core';
import { BaseComponent } from '../../../infrastructure/base-component';
import * as Models from '../../../models/index';

@Component({
  selector: 'app-toggle',
  templateUrl: './toggle.component.html',
  styleUrls: ['./toggle.component.css']
})
export class ToggleComponent extends BaseComponent {
  
  constructor() {
    super();
    
    this.checked = true;
  }
  
  public checked: boolean;

  @Input() field: Models.ToggleFieldItem;

  ngOnInit() {
  }

}
