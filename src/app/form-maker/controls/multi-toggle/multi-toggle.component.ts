import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { BaseComponent } from '../../../infrastructure/base-component';
import * as Models from '../../../models/index';
import * as Interfaces from '../../../interfaces/index';
import { FormArray, FormControl } from '@angular/forms';

@Component({
  selector: 'app-multi-toggle',
  templateUrl: './multi-toggle.component.html',
  styleUrls: ['./multi-toggle.component.css']
})
export class MultiToggleComponent extends BaseComponent {

  constructor() {
    super();
    this.values = [];
  }
  
  @Input() field: Models.MultiToggleFieldItem;
  
  @Output() SelectedValues: EventEmitter<any> = new EventEmitter<any>();
  
  public values;

  ngOnInit() {
  }
  get options() {
    return <FormControl>this.group.controls[this.field.name];
  }

  get fieldOptions() {
    return <Interfaces.Option[]>this.field.options;
  }


  onCheckChange(event, index: number) {

    const formArray: FormArray = this.group.get(this.field.name) as FormArray;
    let item = this.field.options.find(current => current.id == event.source.id);

    if (event.source.checked) {
      if (item) {
        formArray.controls[index].setValue(item.id);
        this.values[index] = formArray.controls[index].value;
      }
    } else {
      formArray.controls[index].setValue(null);
      this.values[index] = null;
    }

    this.values = this.values.filter(function (el) {
      return el != null;
    });
    console.log(JSON.stringify(this.group.get(this.field.name).value))
    this.SelectedValues.emit(this.values);
  }

  getColumnClass(col: number) {
    if (this.field.columns >= 1 && this.field.inlineView == false) {
      if (this.field.columns > 4) {
        return;
      }

      return `px-1 col-md-${12 / this.field.columns}`;

    }
  }

  getMatRadioGroupClass() {
    if (this.field.inlineView == true) {
      return ``;
    }
    else {
      return `row no-gutters`;
    }
  }

}
