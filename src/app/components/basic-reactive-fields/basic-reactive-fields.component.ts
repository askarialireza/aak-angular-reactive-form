import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Form } from '../../models/form';
import { FormService } from '../../services/form.service';

@Component({
  selector: 'app-basic-reactive-fields',
  templateUrl: './basic-reactive-fields.component.html',
  styleUrls: ['./basic-reactive-fields.component.css']
})
export class BasicReactiveFieldsComponent implements OnInit {

  @Input() editMode: boolean;

  @Input() isHorizontalForm: boolean;

  @Input() formItem: Form;

  @Input() formGroup: FormGroup;

  @Output() formValueChanged: EventEmitter<any> = new EventEmitter<any>();

  constructor(public formService: FormService) {

  }

  ngOnInit() {

  }
}
