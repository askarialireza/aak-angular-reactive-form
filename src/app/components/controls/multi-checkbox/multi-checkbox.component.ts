import { Component, OnInit } from '@angular/core';
import { BaseComponent } from '../base-component';
import { FormArray, FormControl, Validators } from '@angular/forms';
import { Option } from 'src/app/models/option';

@Component({
  selector: 'app-multi-checkbox',
  templateUrl: './multi-checkbox.component.html',
  styleUrls: ['./multi-checkbox.component.css']
})
export class MultiCheckboxComponent extends BaseComponent {

  constructor() {
    super();
  }

  public selectedOptions;

  ngOnInit() {
    this.selectedOptions = this.fieldOptions;
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

  onCheckChange(event,index:number) {
    const formArray: FormArray = this.group.get(this.field.name) as FormArray;
    let item = this.field.options.find(current=>current.id == event.target.id)
    if (event.target.checked) {
      if(item){
        formArray.controls[index].setValue(item);
      }
    } else {
      formArray.controls[index].setValue(null);
    }
  }

}
