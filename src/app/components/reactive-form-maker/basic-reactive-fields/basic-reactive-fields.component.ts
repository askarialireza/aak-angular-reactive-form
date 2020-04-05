import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';
import * as Services from '../../../exports/service.namespace';
import * as Interfaces from '../../../exports/interface.namespace';

@Component({
  selector: 'app-basic-reactive-fields',
  templateUrl: './basic-reactive-fields.component.html',
  styleUrls: ['./basic-reactive-fields.component.css']
})
export class BasicReactiveFieldsComponent implements OnInit {

  @Input() editMode: boolean;

  @Input() isHorizontalForm: boolean;

  @Input() formItem: Interfaces.Form;

  @Input() formGroup: FormGroup;

  @Output() formValueChanged: EventEmitter<any> = new EventEmitter<any>();

  constructor(public formService: Services.FormService) {}

  ngOnInit() {

  }
}
