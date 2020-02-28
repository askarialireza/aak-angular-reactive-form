import { Component, OnInit } from '@angular/core';
import { FormService } from 'src/app/services/form.service';

@Component({
  selector: 'app-main-panel',
  templateUrl: './main-panel.component.html',
  styleUrls: ['./main-panel.component.css']
})
export class MainPanelComponent implements OnInit {

  constructor(public formService: FormService) { }

  ngOnInit() {
    this.formService.formGroup = this.formService.getFormGroup();

    this.formService.sortFieldItemsByOrder();

    this.formService.formGroup = this.formService.createControl();
  }

}
