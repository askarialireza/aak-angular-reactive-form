import { Component, Input } from '@angular/core';
import { BaseComponent } from '../../../infrastructure/base-component';
import * as Models from '../../../models/index';

@Component({
  selector: 'app-textarea',
  templateUrl: './textarea.component.html',
  styleUrls: ['./textarea.component.css']
})
export class TextareaComponent extends BaseComponent {

  constructor() {
    super();
  }

  @Input() field: Models.TextareaFieldItem;

  ngOnInit() {
  }

}
