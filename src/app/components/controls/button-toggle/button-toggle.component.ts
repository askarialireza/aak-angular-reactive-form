import { Component, Input } from '@angular/core';
import { BaseComponent } from '../../../infrastructure/base-component';
import { Option } from '../../../models/option';
import { FontAwesomeService } from '../../../services/fontawesome.service';

@Component({
  selector: 'app-button-toggle',
  templateUrl: './button-toggle.component.html',
  styleUrls: ['./button-toggle.component.css']
})
export class ButtonToggleComponent extends BaseComponent {

  @Input() icon: string;

  public iconArray;

  constructor(private fontAwesomeService: FontAwesomeService) {

    super();

    this.iconArray = this.fontAwesomeService.getFontAwesomeIconArray('fas fa-minus');
  }

  ngOnInit() {

  }

  toggle(item: Option): boolean {
    return item.disabled = !item.disabled;
  }

  onChanged(e) {
    this.group.get(this.field.name).setValue(e.value);
    let item = this.field.options.find(current => current.id == e.value);
    this.field.options.map(current => current.disabled = false);
    this.toggle(item);
  }

}
