import { Component, OnInit } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { FieldTypeSelectModalComponent } from '../field-select-panel-modals/field-type-select-modal/field-type-select-modal.component';
import { ChooseFieldType } from 'src/app/mocks/field-type-select-group.mock';

@Component({
  selector: 'app-field-select-panel',
  templateUrl: './field-select-panel.component.html',
  styleUrls: ['./field-select-panel.component.css']
})
export class FieldSelectPanelComponent implements OnInit {

  constructor(private modal: MatBottomSheet) { }

  ngOnInit() {
  }

  openSelectFieldTypeModal() {
    //this.modal.open(FieldTypeSelectModalComponent, { data: ChooseFieldType });
  }
}
