import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { FormService } from '../../services/form.service';
import { FormGroup } from '@angular/forms';
import { Form } from '../../models/form';

@Component({
  selector: 'app-basic-form',
  templateUrl: './basic-form.component.html',
  styleUrls: ['./basic-form.component.css']
})
export class BasicFormComponent implements OnInit {

  @Output() submit: EventEmitter<any> = new EventEmitter<any>();

  @Output() reset: EventEmitter<any> = new EventEmitter<any>();

  @Input() editMode: boolean;

  @Input() isHorizontalForm: boolean;

  @Input() formItem: Form;

  @Input() formGroup: FormGroup;

  constructor(public formService: FormService) { }

  ngOnInit() {
  }

  onSubmit(event: Event) {

    event.preventDefault();
    event.stopPropagation();

    this.submit.emit();

  }

  onDateSelected(e) {
    console.log(e);
  }

  formModelChanged(event: Event) {

  }

}
