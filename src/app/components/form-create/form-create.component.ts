import { Component, OnInit } from '@angular/core';
import { FormService } from '../../services/form.service';
import { FieldItem } from '../../models/field-item';
import { FormCreateService } from '../../services/form-create.service';
import { Form } from 'src/app/models/form';
import { Guid } from 'guid-typescript';
import { FormApiService } from 'src/app/services/api/form.api.service';
//import PersianDateTime = Mds.PersianDateTime;


@Component({
  selector: 'app-form-create',
  templateUrl: './form-create.component.html',
  styleUrls: ['./form-create.component.css']
})
export class FormCreateComponent implements OnInit {


  isSuccess: boolean = false;

  constructor(
    public formCreateService: FormCreateService,
    private formService: FormService,
    private formApiService: FormApiService
  ) {

  }

  ngOnInit() {

    this.formService.sortFieldItemsByOrder(this.formCreateService.getFieldItems());

    this.formCreateService.formGroup = this.formService.createControl(this.formCreateService.getFieldItems());
  }

  OnSubmit(event: Event) {

    if (this.formCreateService.formGroup.valid) {

      let formName: string = this.formCreateService.formGroup.get('name').value;

      let url: string = this.formCreateService.formGroup.get('url').value;

      let action: string = this.formCreateService.formGroup.get('action').value;

      let selectedValues = this.formCreateService.formGroup.get('options').value;

      let isHorizontal: boolean = (selectedValues.includes("check-horizontal")) ? true : false;

      let isActive: boolean = (selectedValues.includes("check-active")) ? true : false;

      let startDate: Date = this.formCreateService.formGroup.get('date').value[0];

      let endDate: Date = this.formCreateService.formGroup.get('date').value[1];

      let form: Form = {
        id: Guid.create().toString(),
        name: formName.trim(),
        url: url.trim(),
        action: action.trim(),
        isHorizontal: isHorizontal,
        isActive: isActive,
        startDate: startDate,
        endDate: endDate,
      }

      console.log(form);

      // this.formApiService.postForm(form)
      // .subscribe();
    }


  }


  OnSelectedValues(values: string[]) {
    // if (values.includes("check-horizontal")) {
    //   this.formService.getFormItem().isHorizontal = true;
    // }
    // else {
    //   this.formService.getFormItem().isHorizontal = false;
    // }
  }
}
