import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { FormGroup } from '@angular/forms';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { ObjectMapper } from 'src/app/infrastructure/object-mapper';
import { stepOneForm } from '../../mocks/form-create-step1';
import * as Services from '../../services/index';
import * as Interfaces from '../../interfaces/index';
import * as Modals from '../../form-maker/modals/index';
import * as Models from '../../models/index';
import * as Mocks from '../../mocks/field-type-select-group.mock';

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
    public formApiService: Services.FormApiService,
    public fieldItemService: Services.FieldItemService,
    private modal: MatBottomSheet
  ) {
    this.formGroupOne = new FormGroup({});
    this.formItem = new Models.Form({});
  }

  ngOnInit() {
    this.formApiService.GetByName('createform1',true,true)
      .subscribe(result => {
        this.formItem = ObjectMapper.MapForm(result);
        this.formService.sortFieldItemsByOrder(this.formItem.fieldItems);
        this.formGroupOne = this.formService.CreateControls(this.formItem.fieldItems);
        console.log(this.formItem);
      },
        error => {
          this.formItem = stepOneForm;
          this.formService.sortFieldItemsByOrder(this.formItem.fieldItems);
          this.formGroupOne = this.formService.CreateControls(this.formItem.fieldItems);
          console.log(this.formGroupOne.value);
          console.log(this.formItem);
        }
      );
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
