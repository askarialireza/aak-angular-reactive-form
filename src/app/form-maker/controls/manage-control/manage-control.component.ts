import * as fas from '@fortawesome/free-solid-svg-icons';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { FormGeneratorComponent } from '../../form-generator/form-generator.component';
import { Component, OnInit, Input, Inject } from '@angular/core';
import * as Interfaces from '../../../interfaces/index';
import * as Services from '../../../services/index';

@Inject(FormGeneratorComponent)
@Component({
  selector: 'app-manage-control',
  templateUrl: './manage-control.component.html',
  styleUrls: ['./manage-control.component.css']
})

export class ManageControlComponent implements OnInit {

  @Input() field: Interfaces.MultiViewFieldItem;

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
    public formService: Services.FormService,
    private fieldItemApiService: Services.FieldItemApiService,
    private fieldItemService: Services.FieldItemService,
    private modal: MatBottomSheet) {

    this.changeViewListEnabled = false;

  }

  ngOnInit() {

    this.isInline = this.GetListView();
    this.changeViewListEnabled = this.checkControl(this.field);

  }

  EditField(e) {
    if (e) {
      // this.modal.open(FieldEditModalComponent, { data: this.field, panelClass: 'mat-bottom-sheet-custom-container-xlarge' });
    }
  }

  DeleteField() {

    this.fieldItemService.RemoveFieldItem(this.field);

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

    if (this.fieldItemService.GetIndexOf(this.field) === 0) {
      return true;
    }
    else {
      return false;
    }

  }

  IsLastItem() {

    if (this.fieldItemService.GetIndexOf(this.field) === this.fieldItemService.GetFieldItemsCount() - 1) {
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
      if (this.field.width === 12) {
        return true;
      }
    }

  }

  isMinimumWidth() {

    if (this.field.width) {
      if (this.field.width === 1) {
        return true;
      }
    }

  }

  checkControl(field: Interfaces.BaseFieldItem) {

    switch (field.type) {
      case 'checkbox':
      case 'radio':
      case 'radiobutton':
      case 'multicheckbox':
        return true;

      default:
        return false;
    }

  }

  moveItemNext(fieldItem: Interfaces.BaseFieldItem) {

    const index = this.fieldItemService.formItem.fieldItems.indexOf(fieldItem);
    const temp =
      this.fieldItemService.formItem.fieldItems.splice(index, 1, this.fieldItemService.GetByIndex(index + 1))[0];
    temp.order++;
    this.fieldItemService.formItem.fieldItems.splice(index + 1, 1, temp);
    this.fieldItemService.GetByIndex(index).order--;

  }

  moveItemPrevious(fieldItem: Interfaces.BaseFieldItem) {

    const index = this.fieldItemService.formItem.fieldItems.indexOf(fieldItem);
    const temp =
      this.fieldItemService.formItem.fieldItems.splice(index, 1, this.fieldItemService.GetByIndex(index - 1))[0];
    temp.order--;
    this.fieldItemService.formItem.fieldItems.splice(index - 1, 1, temp);
    this.fieldItemService.GetByIndex(index).order++;

  }

  increaseWidth(fieldItem: Interfaces.BaseFieldItem) {

    if (fieldItem) {
      if (fieldItem.width) {
        if (fieldItem.width < 12) {
          this.fieldItemService.GetById(fieldItem.id).width++;
        }
      }
    }

  }

  decreaseWidth(fieldItem: Interfaces.BaseFieldItem) {

    if (fieldItem) {
      if (fieldItem.width) {
        if (fieldItem.width > 1) {
          this.fieldItemService.GetById(fieldItem.id).width--;
        }
      }
    }

  }

}
