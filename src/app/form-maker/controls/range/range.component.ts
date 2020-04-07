import { Component, Input } from '@angular/core';
import { BaseComponent } from '../../../infrastructure/base-component';
import * as Models from '../../../models/index';

@Component({
  selector: 'app-range',
  templateUrl: './range.component.html',
  styleUrls: ['./range.component.css']
})
export class RangeComponent extends BaseComponent {

  constructor() {
    super();
   }
   
   @Input() field: Models.RangeFieldItem;

  ngOnInit() {
  }

}
