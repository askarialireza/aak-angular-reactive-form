import { Component, OnInit } from '@angular/core';
import { FormService } from '../../services/form.service';
import { Form } from 'src/app/models/form';
import { FormApiService } from 'src/app/services/api/form.api.service';
import { TestFormItem } from 'src/app/mocks/form.mock';

@Component({
  selector: 'app-main-panel',
  templateUrl: './main-panel.component.html',
  styleUrls: ['./main-panel.component.css']
})
export class MainPanelComponent implements OnInit {

  public isLoading;

  public hasError;

  public errrorMessage;

  public formName: string;

  public formItem: Form;

  constructor(public formService: FormService, private formApiService: FormApiService) {

    this.isLoading = true;
    this.hasError = false;

  }

  ngOnInit() {
    this.formApiService.getDefaultForm()
      .subscribe(
        result => {
          this.formService.formItem = result;
          this.formItem = result;
          this.formService.isHorizontalModeEnabled = result["isHorizontal"];
          this.formService.isEditModeEnabled = result["editMode"];
          this.formName = result["name"];
          this.formService.formGroup = this.formService.getFormGroup();
          this.formService.sortFieldItemsByOrder(this.formService.getFormItem().fieldItems);
          this.formService.formGroup = this.formService.createControl(this.formService.getFormItem().fieldItems);
          this.isLoading = false;
        },
        error => {
          this.isLoading = false;
          //this.hasError = true;
          //this.errrorMessage = error.message;

          this.formItem = TestFormItem;
          this.formName = TestFormItem.name;
          this.formService.formItem = TestFormItem;
          this.formService.isHorizontalModeEnabled = false;
          this.formService.isEditModeEnabled = true;
          this.formService.formGroup = this.formService.getFormGroup();
          this.formService.sortFieldItemsByOrder(this.formService.getFormItem().fieldItems);
          this.formService.formGroup = this.formService.createControl(this.formService.getFormItem().fieldItems);
          //console.log(error);
        },
        () => {

        }
      );
  }

  OnSubmit(data: Form) {

    data.value = JSON.stringify(this.formService.formGroup.value, null, 0);

    this.formApiService.submitForm(data)
      .subscribe(
        result => {
        },
        error => {
          console.log(error);
        },
        () => {
        }
      );
  }
}
