import { Component, EventEmitter, Output, Input } from '@angular/core';
import { BaseComponent } from '../../../infrastructure/base-component';
import * as Models from '../../../models/index';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css']
})

export class SelectComponent extends BaseComponent {

  public selectedValue = null;
  @Input() field: Models.SelectFieldItem;
  @Output() public valueChanged = new EventEmitter<string>();

  constructor() {
    super();
  }

  public selectedItemChanged(newValue: string): void {

    this.valueChanged.emit(newValue);

  }

}
