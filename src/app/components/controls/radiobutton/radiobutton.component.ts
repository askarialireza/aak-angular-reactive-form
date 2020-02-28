import { Component, OnInit, Input } from '@angular/core';
import { FieldItem } from 'src/app/models/field-item';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-radiobutton',
  templateUrl: './radiobutton.component.html',
  styleUrls: ['./radiobutton.component.css']
})
export class RadiobuttonComponent implements OnInit {

  @Input() field: FieldItem;

  @Input() group: FormGroup;

  public model: string;

  constructor() { }

  ngOnInit() {
  }

}
