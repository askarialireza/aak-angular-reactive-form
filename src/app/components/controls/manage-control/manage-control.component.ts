import { Component, OnInit, Input, Inject } from '@angular/core';
import { FieldItem } from '../../../models/field-item';
import * as fas from '@fortawesome/free-solid-svg-icons';
import { FielditemApiService } from 'src/app/services/api/fielditem.api.service';
import { FieldItemService } from 'src/app/services/field-item.service';
import { FormService } from 'src/app/services/form.service';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { BasicReactiveFieldsComponent } from '../../basic-reactive-fields/basic-reactive-fields.component';
import { FieldEditModalComponent } from '../../field-select-panel-modals/field-edit-modal/field-edit-modal.component';
@Inject(BasicReactiveFieldsComponent)
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

  constructor(
    public formService: FormService,
    private fieldItemApiService: FielditemApiService,
    private fieldItemService: FieldItemService,
    private modal: MatBottomSheet) {

    this.changeViewListEnabled = false;

  }

  ngOnInit() {

    this.isInline = this.GetListView();
    this.changeViewListEnabled = this.checkControl(this.field);

  }

  EditField(e) {
    if(e){
      this.modal.open(FieldEditModalComponent, { data: this.field, panelClass: 'mat-bottom-sheet-custom-container-xlarge' });
    }
  }

  DeleteField() {

    let id = this.field.id;

    this.fieldItemService.formItem.fieldItems.splice(this.fieldItemService.formItem.fieldItems.indexOf(this.field), 1);

    this.fieldItemService.formGroup.removeControl(this.field.name);

    // this.fieldItemApiService.deleteFieldItem(id).subscribe(

    //   result => {

    //     this.fieldItemService.formItem.fieldItems.splice(this.fieldItemService.formItem.fieldItems.indexOf(this.field), 1);

    //     this.fieldItemService.formGroup.removeControl(this.field.name);

    //   }

    // );

  }

  ChangeListView() {

    this.field.inlineView = !this.field.inlineView;

    this.isInline = this.field.inlineView;

  }

  GetListView() {

    return this.field.inlineView;

  }

  IsFirstItem() {

    if (this.fieldItemService.getIndexOfFieldItem(this.field) == 0) {

      return true;

    }

    else {


      return false;
    }

  }

  IsLastItem() {

    if (this.fieldItemService.getIndexOfFieldItem(this.field) == this.fieldItemService.getFieldItemsCount() - 1) {

      return true;

    }
    else {

      return false;

    }

  }

  MoveDown() {

    this.moveItemNext(this.field);

  }

  MoveUp() {

    this.moveItemPrevious(this.field);

  }

  IncreaseWidth() {

    this.increaseWidth(this.field);

    this.isMaximumWidth();
  }


  DecreaseWidth() {

    this.decreaseWidth(this.field);

    this.isMinimumWidth();
  }

  isMaximumWidth() {

    if (this.field.width) {
      if (this.field.width == 12) {
        return true;
      }
    }

  }

  isMinimumWidth() {

    if (this.field.width) {
      if (this.field.width == 1) {
        return true;
      }
    }

  }

  checkControl(field: FieldItem) {

    switch (field.type) {
      case "checkbox":
      case "radio":
      case "radiobutton":
      case "multicheckbox":
        return true;
        break;

      default:
        return false;
        break;
    }

  }

  moveItemNext(fieldItem: FieldItem) {

    let index = this.fieldItemService.formItem.fieldItems.indexOf(fieldItem);
    var temp =
      this.fieldItemService.formItem.fieldItems.splice(index, 1, this.fieldItemService.formItem.fieldItems[index + 1])[0];
    temp.order++;
    this.fieldItemService.formItem.fieldItems.splice(index + 1, 1, temp);
    this.fieldItemService.formItem.fieldItems[index].order--;

  }

  moveItemPrevious(fieldItem: FieldItem) {

    let index = this.fieldItemService.formItem.fieldItems.indexOf(fieldItem);
    var temp =
      this.fieldItemService.formItem.fieldItems.splice(index, 1, this.fieldItemService.formItem.fieldItems[index - 1])[0];
    temp.order--;
    this.fieldItemService.formItem.fieldItems.splice(index - 1, 1, temp);
    this.fieldItemService.formItem.fieldItems[index].order++;

  }

  increaseWidth(fieldItem: FieldItem) {

    if (fieldItem) {
      if (fieldItem.width) {
        if (fieldItem.width < 12) {
          this.fieldItemService.formItem.fieldItems.find(current => current.id == fieldItem.id).width++;
        }
      }
    }

  }

  decreaseWidth(fieldItem: FieldItem) {

    if (fieldItem) {
      if (fieldItem.width) {
        if (fieldItem.width > 1) {
          this.fieldItemService.formItem.fieldItems.find(current => current.id == fieldItem.id).width--;
        }
      }
    }

  }

}
