import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { BaseComponent } from '../../../infrastructure/base-component';
import { FormArray, FormControl, Validators } from '@angular/forms';
import { Option } from '../../../models/option';

@Component({
  selector: 'app-multi-checkbox',
  templateUrl: './multi-checkbox.component.html',
  styleUrls: ['./multi-checkbox.component.css']
})
export class MultiCheckboxComponent extends BaseComponent {

  constructor() {
    super();
  }

  public values;

  @Output() SelectedValues: EventEmitter<any> = new EventEmitter<any>();

  ngOnInit() {
    this.values = [];
  }



  get options() {
    return <FormControl>this.group.controls[this.field.name];
  }

  get fieldOptions() {
    return <Option[]>this.field.options;
  }

  get errorMessage() {
    let error = '';
    if (this.field.required) {
      let validation =
        this.field.validations.find(current => current.validator == Validators.required)

      if (validation) {
        error = validation.message;
      }
    }
    return <string>error;
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

    this.SelectedValues.emit(this.values);
  }

}
