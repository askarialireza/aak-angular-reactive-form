import { Component, OnInit } from '@angular/core';
import { CdkDragDrop } from '@angular/cdk/drag-drop';
import * as Interfaces from '../../interfaces/index';
import * as Services from '../../services/index';
import * as Models from '../../models/index';
import { FormGroup } from '@angular/forms';
@Component({
  selector: 'app-dashboard-form-builder',
  templateUrl: './dashboard-form-builder.component.html',
  styleUrls: ['./dashboard-form-builder.component.css']
})
export class DashboardFormBuilderComponent implements OnInit {

  constructor(public fieldItemService: Services.FieldItemService,private formService: Services.FormService) {
    this.items = [];
    this.formGroupOne = new FormGroup({});
  }
  public formGroupOne: FormGroup;
  public formItem: Interfaces.Form;
  public items: [];

  ngOnInit() {
  }
  onDropItem(event: CdkDragDrop<Interfaces.FieldType[]>) {
    let fieldItem: Interfaces.BaseFieldItem =
      new Models.InputFieldItem({
        label: 'فیلد 1',
        order: this.fieldItemService.GetLastOrder(),
      });

    this.fieldItemService.PushFieldItem(fieldItem);

    this.fieldItemService.formGroup =
      this.formService.createControl(this.fieldItemService.fieldItems);
   // console.log(event.previousContainer.data);
  }
}
