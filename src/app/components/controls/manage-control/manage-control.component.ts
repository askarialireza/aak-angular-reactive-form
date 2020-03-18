import { Component, OnInit, Input } from '@angular/core';
import { FieldItem } from '../../../models/field-item';
import { FormService } from '../../../services/form.service';
import * as fas from '@fortawesome/free-solid-svg-icons';
import { FielditemApiService } from 'src/app/services/api/fielditem.api.service';

@Component({
  selector: 'app-manage-control',
  templateUrl: './manage-control.component.html',
  styleUrls: ['./manage-control.component.css']
})
export class ManageControlComponent implements OnInit {

  @Input() field: FieldItem;

  changeViewListEnabled: boolean;

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

  constructor(private fieldItemApiService: FielditemApiService, public formService: FormService) {
    this.changeViewListEnabled = false;
  }

  ngOnInit() {
    this.isInline = this.GetListView();
    this.changeViewListEnabled = this.CheckControl(this.field);
  }

  EditField() {
  }

  DeleteField() {

    let id = this.field.id;

    this.fieldItemApiService.deleteFieldItem(id).subscribe(

      result => {

        this.formService.FormItem.fieldItems.splice(this.formService.FormItem.fieldItems.indexOf(this.field), 1);

        this.formService.formGroup.removeControl(this.field.name);

      }

    );

  }

  ChangeListView() {

    this.field.inlineView = !this.field.inlineView;

    this.isInline = this.field.inlineView;

  }

  GetListView() {

    return this.field.inlineView;

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

  CheckControl(field: FieldItem) {
    switch (field.type) {
      case "checkbox":
      case "radio":
      case "radiobutton":
      case "multicheckbox":
      case "daterange":
        return true;
        break;

      default:
        return false;
        break;
    }
  }

}
