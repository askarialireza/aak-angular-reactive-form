import { Component } from '@angular/core';
import { BaseComponent } from '../../../../infrastructure/base-component';

@Component({
  selector: 'app-range',
  templateUrl: './range.component.html',
  styleUrls: ['./range.component.css']
})
export class RangeComponent extends BaseComponent {

  constructor() {
    super();
   }

  ngOnInit() {
  }

  formatLabel(value: number) {
      return Math.round((value/12)*100) + '%';
  }

}