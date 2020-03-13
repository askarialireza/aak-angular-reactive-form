import { Component, Input } from '@angular/core';
import { BaseComponent } from '../base-component';
import { Option } from '../../../models/option';
import { FontAwesomeService } from '../../../services/fontawesome.service';

@Component({
  selector: 'app-radiobutton',
  templateUrl: './radiobutton.component.html',
  styleUrls: ['./radiobutton.component.css']
})
export class RadiobuttonComponent extends BaseComponent {

  constructor(private fontAwesomeService : FontAwesomeService) {
    
    super();

    this.iconArray = this.fontAwesomeService.getFontAwesomeIconArray('fas fa-minus');
  }

  @Input() icon: string;
  public iconArray;
  toggle(item: Option): boolean {
    return item.disabled = !item.disabled;
  }

  onClickBtn(item: Option) {
    this.field.options.map(a => a.disabled = false);
    this.toggle(item)
  }

  ngOnInit() {

  }

}
