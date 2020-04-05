import { Component, Input } from '@angular/core';
import { BaseComponent } from '../../../../infrastructure/base-component';
import * as Models from '../../../../exports/model.namespace';

@Component({
  selector: 'app-button-toggle',
  templateUrl: './button-toggle.component.html',
  styleUrls: ['./button-toggle.component.css']
})
export class ButtonToggleComponent extends BaseComponent {

  @Input() icon: string;

  @Input() field: Models.ButtonToggleFieldItem;

  constructor() {
    super();
  }

  ngOnInit() {

  }

  onChanged(e) {
    this.group.get(this.field.name).setValue(e.value);
    let item = this.field.options.find(current => current.id == e.value);
  }

}
