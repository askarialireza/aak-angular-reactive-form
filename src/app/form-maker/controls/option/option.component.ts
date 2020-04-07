import { Component, OnInit } from '@angular/core';
import { BaseComponent } from '../../../infrastructure/base-component';
import * as Interfaces from '../../../interfaces/index';
import * as Models from '../../../models/index';

import { FormGroup, FormArray, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-option',
  templateUrl: './option.component.html',
  styleUrls: ['./option.component.css']
})
export class OptionComponent implements BaseComponent {

  constructor() {
  }

  field: Models.OptionFieldItem;

  boolean: boolean = true;

  group: FormGroup;

  ngOnInit() {
  }

  AddOption() {
    this.field.options.push(new Models.Option({}));
    const control = new FormControl(null, Validators.required);
    (this.group.controls[this.field.name] as FormArray).push(control);
  }

  RemoveOption(option: Interfaces.Option) {
    this.field.options.splice(this.field.options.indexOf(option), 1);
    (this.group.controls[this.field.name] as FormArray).removeAt(this.field.options.indexOf(option));
  }
}
