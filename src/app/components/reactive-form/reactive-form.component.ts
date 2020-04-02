import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormService } from '../../services/form.service';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { FormGroup } from '@angular/forms';
import { Form } from 'src/app/models/form';
import { FieldItem } from 'src/app/models/field-item';
import { StepOneForm } from '../../mocks/form-create-step1';
import { FieldItemService } from 'src/app/services/field-item.service';

@Component({
  selector: 'app-reactive-form',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css'],
  providers: [{
    provide: STEPPER_GLOBAL_OPTIONS, useValue: { showError: true }
  }]
})
export class ReactiveFormComponent implements OnInit {

  public formGroupOne: FormGroup;
  public formItem: Form;
  public formTitle: string;

  constructor(public formService: FormService, public fieldItemService: FieldItemService) {

    this.formItem = StepOneForm;
    this.formGroupOne = new FormGroup({});

  }

  ngOnInit() {
    this.formService.sortFieldItemsByOrder(this.formItem.fieldItems);
    this.formGroupOne = this.formService.createControl(this.formItem.fieldItems);
  }

  onSumbitStep1(e) {
    this.fieldItemService.formItem.name = this.formGroupOne.get('name').value;
  }

  onSumbitStep2(e) {

  }

}
