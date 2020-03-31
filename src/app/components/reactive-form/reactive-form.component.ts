import { Component, OnInit } from '@angular/core';
import { FormService } from '../../services/form.service';
import { FormCreateService } from 'src/app/services/form-create.service';
import {STEPPER_GLOBAL_OPTIONS} from '@angular/cdk/stepper';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css'],
  providers: [{
    provide: STEPPER_GLOBAL_OPTIONS, useValue: {showError: true}
  }]
})
export class ReactiveFormComponent implements OnInit {

  constructor(public formService: FormService, public formCreateService: FormCreateService) { }

  ngOnInit() {

    this.formService.sortFieldItemsByOrder(this.formCreateService.getFieldItems());
    this.formCreateService.formGroup = this.formService.createControl(this.formCreateService.getFieldItems());
  }

  onSumbitStep1(e) {
    console.log(JSON.stringify(this.formCreateService.formGroup.value));
  }

}
