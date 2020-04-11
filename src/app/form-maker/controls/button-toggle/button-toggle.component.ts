import { Component, Input, Output, EventEmitter } from '@angular/core';
import { BaseComponent } from '../../../infrastructure/base-component';
import * as Models from '../../../models/index';

@Component({
  selector: 'app-button-toggle',
  templateUrl: './button-toggle.component.html',
  styleUrls: ['./button-toggle.component.css']
})
export class ButtonToggleComponent extends BaseComponent {

  @Input() icon: string;

  @Input() field: Models.ButtonToggleFieldItem;

  @Output() selectedOptionChanged: EventEmitter<any> = new EventEmitter<any>();

  constructor() {
    super();
  }

  ngOnInit() {

  }

  onChanged(e) {
    this.group.get(this.field.name).setValue(e.value);
    let item = this.field.options.find(current => current.id == e.value);
    this.selectedOptionChanged.emit(item);
  }

}
