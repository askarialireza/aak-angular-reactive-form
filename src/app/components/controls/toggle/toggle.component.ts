import { Component, OnInit } from '@angular/core';
import { BaseComponent } from 'src/app/infrastructure/base-component';

@Component({
  selector: 'app-toggle',
  templateUrl: './toggle.component.html',
  styleUrls: ['./toggle.component.css']
})
export class ToggleComponent extends BaseComponent {

  public checked: boolean;

  constructor() {
    super();

    this.checked = true;
   }

  ngOnInit() {
  }

}
