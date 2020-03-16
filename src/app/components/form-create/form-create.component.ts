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

  public nameField: FieldItem;

  public urlField: FieldItem

  public actionField: FieldItem;

  public dateRangeField: FieldItem;

  public checkboxField: FieldItem;

  public isHorizontal: boolean;

  constructor(
    public formCreateService: FormCreateService,
    private formService: FormService,
    private formApiService: FormApiService
  ) {

    this.isHorizontal = false;

    this.getFields();

  }

  ngOnInit() {

    this.formService.sortFieldItemsByOrder(this.formCreateService.getFieldItems());

    this.formCreateService.formGroup = this.formService.createControl(this.formCreateService.getFieldItems());
  }

  getFields() {

    this.nameField =
      this.formCreateService.getFieldItems()
        .find(current => current.name == "name");

    this.urlField =
      this.formCreateService.getFieldItems()
        .find(current => current.name == "url");

    this.actionField =
      this.formCreateService.getFieldItems()
        .find(current => current.name == "action");

    this.dateRangeField =
      this.formCreateService.getFieldItems()
        .find(current => current.name == "date");

    this.checkboxField =
      this.formCreateService.getFieldItems()
        .find(current => current.name == "options");
  }


  OnSubmit(event: Event) {

    if (this.formCreateService.formGroup.valid) {

      let formName: string = this.formCreateService.formGroup.get('name').value;

      let url: string = this.formCreateService.formGroup.get('url').value;

      let action: string = this.formCreateService.formGroup.get('action').value;

      let selectedValues = this.formCreateService.formGroup.get('options').value;

      let isHorizontal: boolean = (selectedValues.includes("check-horizontal")) ? true : false;

      let isActive: boolean = (selectedValues.includes("check-active")) ? true : false;

      let form: Form = {
        id: Guid.create().toString(),
        name: formName.trim(),
        url: url.trim(),
        action: action.trim(),
        isHorizontal: isHorizontal,
        isActive: isActive
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
