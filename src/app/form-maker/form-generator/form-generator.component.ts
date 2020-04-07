import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';
import * as Services from '../../services/index';
import * as Interfaces from '../../interfaces/index';

@Component({
  selector: 'app-form-generator',
  templateUrl: './form-generator.component.html',
  styleUrls: ['./form-generator.component.css']
})
export class FormGeneratorComponent implements OnInit {

  @Input() editMode: boolean;

  @Input() isHorizontalForm: boolean;

  @Input() formItem: Interfaces.Form;

  @Input() formGroup: FormGroup;

  @Output() formValueChanged: EventEmitter<any> = new EventEmitter<any>();

  constructor(public formService: Services.FormService) { }

  ngOnInit() {

  }
}
