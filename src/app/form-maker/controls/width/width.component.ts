import { Component, OnInit, Input } from '@angular/core';
import { BaseComponent } from '../../../infrastructure/base-component';
import * as Models from '../../../models/index';
@Component({
  selector: 'app-width',
  templateUrl: './width.component.html',
  styleUrls: ['./width.component.css']
})
export class WidthComponent extends BaseComponent {

  @Input() field: Models.WidthFieldItem;

  public isRangeOptionSelected: boolean;

  constructor() {
    super();
    this.isRangeOptionSelected = false;
  }

  ngOnInit() {
  }

  onOptionChanged(option: Models.Option) {
    if (option.id == 'width-select') {
      this.group.get(this.field.name).setValue(3);
      this.isRangeOptionSelected = true;
    } else {
      this.isRangeOptionSelected = false;
    }
    switch (option.id) {
      case 'width-select':
        this.group.get(this.field.name).setValue(3);
        this.isRangeOptionSelected = true;
        break;
      case 'width-small':
        this.group.get(this.field.name).setValue(3);
        this.isRangeOptionSelected = false;
        break;
      case 'width-medium':
        this.group.get(this.field.name).setValue(6);
        this.isRangeOptionSelected = false;
        break;
      case 'width-large':
        this.group.get(this.field.name).setValue(12);
        this.isRangeOptionSelected = false;
        break;
      default:
        break;
    }

    console.log(JSON.stringify(this.group.get(this.field.name).value));
  }

  onRangeValueChanged(value: number) {
    console.log(JSON.stringify(this.group.get(this.field.name).value));
  }

}
