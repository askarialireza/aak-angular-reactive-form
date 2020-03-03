import { Component, OnInit, Input } from '@angular/core';
import { FieldItem } from '../../../models/field-item';
import { FormService } from '../../../services/form.service';
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

  faEllipsisVertical = fas.faEllipsisV;
  faEllipsisHorizontal = fas.faEllipsisH;
  faCog = fas.faCog;
  faTrashAlt = fas.faTrashAlt;
  faEdit = fas.faEdit;
  faAngleUp = fas.faAngleUp;
  faAngleDown = fas.faAngleDown;
  faPlus = fas.faPlus;
  faMinus = fas.faMinus;

  constructor(public formService: FormService) {
    this.changeViewListEnabled = false;
  }

  ngOnInit() {
    this.isInline = this.GetListView();
  }

  EditField() {
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

    this.formService.IncreaseWidth(this.field);
    this.IsMaximumWidth();
  }


  DecreaseWidth() {

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
