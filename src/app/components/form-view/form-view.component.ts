import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { FormApiService } from 'src/app/services/api/form.api.service';
import { Form } from 'src/app/models/form';
import { FormGroup } from '@angular/forms';
import { FormService } from 'src/app/services/form.service';

@Component({
  selector: 'app-form-view',
  templateUrl: './form-view.component.html',
  styleUrls: ['./form-view.component.css']
})
export class FormViewComponent implements OnInit {

  public id: string;
  public form: Form;
  public notFound: boolean;
  public isLoading: boolean;
  public isHorizontal: boolean;
  public formGroup: FormGroup;

  constructor(private route: ActivatedRoute, private formApiService: FormApiService, public formService: FormService) {

    this.formGroup = new FormGroup({});

    this.isHorizontal = false;

    this.notFound = false;

    this.isLoading = true;

    this.route.params.subscribe(params => this.id = params['id']);

    this.formApiService.getForm(this.id)
      .subscribe(
        result => {
          //console.log(result);
          this.isLoading = false;
          this.notFound = false
          this.form = result;
          this.isHorizontal = result["isHorizontal"];
          this.formService.formItem = result;
          this.formService.formGroup = this.formService.getFormGroup();
          this.formService.sortFieldItemsByOrder(this.formService.getFormItem().fieldItems);
          this.formService.formGroup = this.formService.createControl(this.formService.getFormItem().fieldItems);

        },
        error => {
          this.isLoading = false;
          this.notFound = true;
        },
        () => {
          
        }
      );
  }

  ngOnInit() {
  }

}
