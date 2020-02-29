import { Component, OnInit, Input } from '@angular/core';
import { FieldItem } from 'src/app/models/field-item';
import { FormService } from 'src/app/services/form.service';
import * as fas from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-manage-control',
  templateUrl: './manage-control.component.html',
  styleUrls: ['./manage-control.component.css']
})
export class ManageControlComponent implements OnInit {

  @Input() field: FieldItem;

  @Input() changeViewListEnabled: boolean;

  public isInline: boolean;

  FaEllipsisVertical = fas.faEllipsisV;
  faEllipsisHorizontal = fas.faEllipsisH;

  constructor(public formService: FormService) {
    this.changeViewListEnabled = false;
  }

  ngOnInit() {
    this.isInline = this.GetListView();
  }

  EditField() {

    console.log(JSON.stringify(this.field, null, 1));

  }

  DeleteField() {

    this.formService.deleteFieldItem(this.field);

  }

  ChangeListView() {
    this.field.isInlineRadio = !this.field.isInlineRadio;
    this.isInline = this.field.isInlineRadio;
  }

  GetListView() {
    return this.field.isInlineRadio;
  }

  IsFirstItem() {

    if (this.formService.getIndexOfFieldItem(this.field) == 0) {
      return true;
    }
    else {
      return false;
    }

  }

  IsLastItem() {

    if (this.formService.getIndexOfFieldItem(this.field) == this.formService.getFieldItemsCount() - 1) {
      return true;
    }
    else {
      return false;
    }

  }

  MoveDown() {

    this.formService.MoveItemNext(this.field);

  }

  MoveUp() {

    this.formService.MoveItemPrevious(this.field);

  }

  IncreaseWidth() {
    console.log(this.field);
    this.formService.IncreaseWidth(this.field);
    this.IsMaximumWidth();
  }


  DecreaseWidth() {
    console.log(this.field);
    this.formService.DecreaseWidth(this.field);
    this.IsMinimumWidth();
  }

  IsMaximumWidth() {
    if (this.field.width) {
      if (this.field.width == 12) {
        return true;
      }
    }
  }

  IsMinimumWidth() {
    if (this.field.width) {
      if (this.field.width == 1) {
        return true;
      }
    }
  }

}
