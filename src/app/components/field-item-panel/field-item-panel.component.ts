import { Component, OnInit } from '@angular/core';
import { CdkDragDrop } from '@angular/cdk/drag-drop';
import * as Interfaces from '../../interfaces/index';
import * as Mocks from '../../mocks/field-type-select-group.mock';
@Component({
  selector: 'app-field-item-panel',
  templateUrl: './field-item-panel.component.html',
  styleUrls: ['./field-item-panel.component.css']
})
export class FieldItemPanelComponent implements OnInit {

  constructor() {
    this.data = Mocks.TextFieldType;
  }

  public data: Interfaces.FieldType;

  ngOnInit() {
  }

  drop(event: CdkDragDrop<Interfaces.FieldType[]>) {
    //console.log(event.container.data);
  }
}
