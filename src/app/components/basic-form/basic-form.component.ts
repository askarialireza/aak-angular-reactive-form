import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { FormService } from '../../services/form.service';
import { FieldItem } from '../../models/field-item';
import { FormGroup } from '@angular/forms';
import { Form } from 'src/app/models/form';

@Component({
  selector: 'app-basic-form',
  templateUrl: './basic-form.component.html',
  styleUrls: ['./basic-form.component.css']
})
export class BasicFormComponent implements OnInit {

  @Output() private onFormGroupChange = new EventEmitter<any>();

  @Output() submit: EventEmitter<any> = new EventEmitter<any>();

  @Output() reset: EventEmitter<any> = new EventEmitter<any>();
  
  @Output() formValueChanged: EventEmitter<any> = new EventEmitter<any>();

  @Input() editMode: boolean;

  @Input() isHorizontalForm: boolean;

  @Input() formItem: Form;

  @Input() formGroup: FormGroup;

  //@Input() items: FieldItem[];

  constructor(public formService: FormService) { }

  ngOnInit() {
  }

  onSubmit(event: Event) {

    event.preventDefault();
    event.stopPropagation();

    this.submit.emit();

  }

  formModelChanged(event: Event) {

  }

}
