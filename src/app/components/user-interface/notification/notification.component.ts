import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {

  @Input() type: string;

  @Input() message: string;

  @Input() messages: any[];

  constructor() {
    this.type = "warning";
  }

  ngOnInit() {
  }

}
