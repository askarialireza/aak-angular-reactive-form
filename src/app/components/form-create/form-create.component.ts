import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FormService } from '../../services/form.service';

@Component({
  selector: 'app-form-create',
  templateUrl: './form-create.component.html',
  styleUrls: ['./form-create.component.css']
})
export class FormCreateComponent implements OnInit {

  public createForm: FormGroup = new FormGroup({
    name: new FormControl('', Validators.required),
    action: new FormControl('', Validators.required),
    horizontal: new FormControl(''),
  });

  isSuccess: boolean = false;

  constructor(private formService: FormService) {
  }



  ngOnInit() {
  }

  OnSubmit(event: Event) {
    if (this.createForm.valid) {
      let formName = this.createForm.get('name').value;
      
      this.formService.setFormItemName(formName);

      let horizontal = this.createForm.get('horizontal').value;

      this.formService.setFormItenHorizontalMode(horizontal);
    }
    this.isSuccess = true;

  }
}
