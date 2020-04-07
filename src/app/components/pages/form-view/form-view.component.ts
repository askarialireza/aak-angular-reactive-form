import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { FormGroup } from '@angular/forms';
import * as Services from '../../../services/index';
import * as Interfaces from '../../../interfaces/index';

@Component({
  selector: 'app-form-view',
  templateUrl: './form-view.component.html',
  styleUrls: ['./form-view.component.css']
})
export class FormViewComponent implements OnInit {

  public id: string;
  public form: Interfaces.Form;
  public notFound: boolean;
  public isLoading: boolean;
  public isHorizontal: boolean;
  public formGroup: FormGroup;

  constructor(private route: ActivatedRoute, private formApiService: Services.FormApiService, public formService: Services.FormService) {

    this.formGroup = new FormGroup({});

    this.isHorizontal = false;

    this.notFound = false;

    this.isLoading = true;

    this.route.params.subscribe(params => this.id = params['id']);

    this.formApiService.Get(this.id)
      .subscribe(
        result => {
          this.isLoading = false;
          this.notFound = false
          this.form = result;
          this.isHorizontal = result["isHorizontal"];
          this.formService.formItem = result;
          this.formService.formGroup = this.formService.createControl(this.formService.formItem.fieldItems);
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
