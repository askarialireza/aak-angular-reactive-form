import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { FieldItemService } from 'src/app/services/field-item.service';
import { FormService } from 'src/app/services/form.service';
import { FieldItem } from 'src/app/models/field-item';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-basic-form',
  templateUrl: './basic-form.component.html',
  styleUrls: ['./basic-form.component.css']
})
export class BasicFormComponent implements OnInit {

  @Output() private onFormGroupChange = new EventEmitter<any>();

  //@Output() submit: EventEmitter<any> = new EventEmitter<any>();
  //@Output() formValueChanged: EventEmitter<any> = new EventEmitter<any>();

  @Input() editMode: boolean;

  @Input() isHorizontalForm: boolean;

  @Input() group: FormGroup;

  @Input() items: FieldItem[];

  constructor(public fieldItemService: FieldItemService, public formService: FormService) { }

  ngOnInit() {

    //this.onFormGroupChange.emit(this.formService.formGroup);
  }

  onItemDrop(e: any) {
    // Get the dropped data here
    console.log(JSON.stringify(e.dragData, null, 1));
  }

}
