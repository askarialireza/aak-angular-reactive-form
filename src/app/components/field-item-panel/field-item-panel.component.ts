import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CdkDragDrop } from '@angular/cdk/drag-drop';
import * as Interfaces from '../../interfaces/index';
import * as Models from '../../models/index';
import * as Services from '../../services/index';
import * as Mocks from '../../mocks/field-type-select-group.mock';
import { FormGroup } from '@angular/forms';
import { createOrUpdateFieldItems } from 'src/app/mocks/create-edit-field-item.mock';

@Component({
  selector: 'app-field-item-panel',
  templateUrl: './field-item-panel.component.html',
  styleUrls: ['./field-item-panel.component.css']
})
export class FieldItemPanelComponent implements OnInit {

  constructor(private formService: Services.FormService,
    private fieldItemService: Services.FieldItemService) {
    this.data = Mocks.TextFieldType;
    this.isItemDropped = false;

    this.formGroup = new FormGroup({});

    this.fieldItems = [];

    createOrUpdateFieldItems.map(item => {
      this.fieldItems.push(item);
    });

    this.formGroup = this.formService.CreateControls(this.fieldItems);

    this.formItem = new Models.Form({ fieldItems: this.fieldItems });
  }

  @Input() isItemDropped: boolean;

  @Output() createPanelClosed: EventEmitter<any> = new EventEmitter<any>();

  public formGroup: FormGroup;

  public formItem: Interfaces.Form;

  public fieldItems: Interfaces.BaseFieldItem[];

  public data: Interfaces.FieldType;

  ngOnInit() {
  }

  drop(event: CdkDragDrop<Interfaces.FieldType[]>) {
    console.log(event);
  }

  onCreateFieldPanelClosed(event) {
    this.isItemDropped = false;
    this.createPanelClosed.emit(this.isItemDropped);
  }
}
