import { Component, OnInit } from '@angular/core';
import { FormService } from '../../services/form.service';
import { FieldItem } from '../../models/field-item';
import { FormCreateService } from '../../services/form-create.service';


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

  constructor(public formCreateService: FormCreateService, private formService: FormService) {
    this.isHorizontal = false;
    this.getFields();
  }



  ngOnInit() {

    this.formService.sortFieldItemsByOrder(this.formCreateService.getFieldItems());

    this.formCreateService.formGroup = this.formService.createControl(this.formCreateService.getFieldItems());
  }

  getFields() {
    this.nameField = this.formCreateService.getFieldItems().find(current => current.name == "name");
    this.urlField = this.formCreateService.getFieldItems().find(current => current.name == "url");
    this.actionField = this.formCreateService.getFieldItems().find(current => current.name == "action");
    this.dateRangeField = this.formCreateService.getFieldItems().find(current => current.name == "date");
    this.checkboxField = this.formCreateService.getFieldItems().find(current => current.name == "options");
  }


  OnSubmit(event: Event) {

    if (this.formCreateService.formGroup.valid) {
      let formName = this.formCreateService.formGroup.get('name').value;

      this.formService.setFormItemName(formName);

      //this.formService.getFormItem().isHorizontal = this.isHorizontal;

      this.isSuccess = true;
    }


  }

  OnSelectedValues(values: string[]) {
    if (values.includes("check-horizontal")) {
      this.formService.getFormItem().isHorizontal = true;
    }
    else {
      this.formService.getFormItem().isHorizontal = false;
    }
  }
}
