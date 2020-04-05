import { Component, Input } from '@angular/core';
import { BaseComponent } from '../../../../infrastructure/base-component';
import * as Models from '../../../../exports/model.namespace';

@Component({
  selector: 'app-toggle',
  templateUrl: './toggle.component.html',
  styleUrls: ['./toggle.component.css']
})
export class ToggleComponent extends BaseComponent {

  public checked: boolean;
  @Input() field: Models.ToggleFieldItem;
  constructor() {
    super();

    this.checked = true;
   }

  ngOnInit() {
  }

}
