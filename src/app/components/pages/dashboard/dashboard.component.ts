import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor() {
    this.isNewItemAdded = false;
   }

  public isNewItemAdded: boolean;

  ngOnInit() {
  }


  onFieldItemAdded(event: boolean) {
    this.isNewItemAdded = event;
  }

  onPanelClosed(event:boolean){
    this.isNewItemAdded = event;
    $('.form-row').find('.field-item').removeClass('field-item');
  }
}
