import { Component, EventEmitter, Output, Input } from '@angular/core';
import { BaseComponent } from '../base-component';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css']
})

export class SelectComponent extends BaseComponent {

  @Output() public valueChanged = new EventEmitter<string>();

  constructor() {
    super();
  }

  public selectedItemChanged(newValue: string): void {

    this.valueChanged.emit(newValue);

  }

}
