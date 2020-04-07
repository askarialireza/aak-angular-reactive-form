import { Component, OnInit } from '@angular/core';
import { BaseComponent } from 'src/app/infrastructure/base-component';

@Component({
  selector: 'app-divider',
  templateUrl: './divider.component.html',
  styleUrls: ['./divider.component.css']
})
export class DividerComponent extends BaseComponent {

  constructor() {
    super();
  }

  ngOnInit() {
  }

}
