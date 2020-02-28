import { Component, OnInit } from '@angular/core';
import { FormService } from 'src/app/services/form.service';

@Component({
  selector: 'app-main-panel-manage-form',
  templateUrl: './main-panel-manage-form.component.html',
  styleUrls: ['./main-panel-manage-form.component.css']
})
export class MainPanelManageFormComponent implements OnInit {

  constructor(public formService: FormService) { }

  ngOnInit() {
  }

}
