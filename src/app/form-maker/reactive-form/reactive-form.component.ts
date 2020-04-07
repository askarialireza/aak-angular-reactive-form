import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { FormGroup } from '@angular/forms';
import { stepOneForm } from '../../mocks/form-create-step1';
import * as Services from '../../services/index';
import * as Interfaces from '../../interfaces/index';
import * as Modals from '../../form-maker/modals/index';
import * as Mocks from '../../mocks/field-type-select-group.mock';
import { MatBottomSheet } from '@angular/material/bottom-sheet';

@Component({
  selector: 'app-reactive-form',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css'],
  providers: [{ provide: STEPPER_GLOBAL_OPTIONS, useValue: { showError: true } }]
})
export class ReactiveFormComponent implements OnInit {

  public formGroupOne: FormGroup;
  public formItem: Interfaces.Form;
  public formTitle: string;
  public logo: string;

  constructor(
    public formService: Services.FormService,
    public fieldItemService: Services.FieldItemService,
    private modal: MatBottomSheet
  ) {

    this.formItem = stepOneForm;
    this.formGroupOne = new FormGroup({});

  }

  ngOnInit() {
    this.formService.sortFieldItemsByOrder(this.formItem.fieldItems);
    this.formGroupOne = this.formService.createControl(this.formItem.fieldItems);
  }

  onSumbitStep1(e) {
    this.fieldItemService.formItem.name = this.formGroupOne.get('name').value;

    this.logo = (this.formGroupOne.get('logo').value)
      ? this.formGroupOne.get('logo').value.path.replace(/\\/g, '/')
      : null;
  }

  onSumbitStep2(e) {
  }
  
  openSelectFieldTypeModal() {
    this.modal.open(Modals.GroupTypeSelectModalComponent, { data: Mocks.ChooseFieldType });
  }
}
