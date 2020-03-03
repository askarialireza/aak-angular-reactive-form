import { Component, OnInit, Input } from '@angular/core';
import { BaseComponent } from '../base-component';
import * as fas from '@fortawesome/free-solid-svg-icons';
import { Option } from '../../../models/option';

@Component({
  selector: 'app-radiobutton',
  templateUrl: './radiobutton.component.html',
  styleUrls: ['./radiobutton.component.css']
})
export class RadiobuttonComponent extends BaseComponent {
  faCheck = fas.faCheck;
  faMinus = fas.faMinus;
  constructor() {
    super();
  }

  toggle(item: Option): boolean {

    return item.disabled = !item.disabled;
  }

  onClickBtn(item: Option) {
    this.field.options.map(a=>a.disabled=false);
    this.toggle(item)
  }

  ngOnInit() {
  }

}
