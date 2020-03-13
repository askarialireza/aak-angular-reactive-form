import { Component, OnInit } from '@angular/core';
import { FormService } from '../../services/form.service';
import { Form } from 'src/app/models/form';
import { FormApiService } from 'src/app/services/api/form.api.service';

@Component({
  selector: 'app-main-panel',
  templateUrl: './main-panel.component.html',
  styleUrls: ['./main-panel.component.css']
})
export class MainPanelComponent implements OnInit {

  public formName: string;

  public formItem: Form;

  constructor(public formService: FormService, private formApiService: FormApiService) {

   }

  ngOnInit() {
    this.formApiService.getDefaultForm()
    .subscribe(
      result => {
        this.formService.FormItem = result;
        this.formItem = result;
        this.formService.isHorizontalMode = result["isHorizontal"];
        this.formService.editModeEnabled = result["editMode"];
        this.formName = result["name"];
        this.formService.formGroup = this.formService.getFormGroup();
        this.formService.sortFieldItemsByOrder(this.formService.getFormItem().fieldItems);
        this.formService.formGroup = this.formService.createControl(this.formService.getFormItem().fieldItems);
      },
      error => {
        console.log(error);
      },
      () => {

      }
    );
  }

  OnSubmit(data:Form) {

    data.value = JSON.stringify(this.formService.formGroup.value,null,0);

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
