import { Component, OnInit, Input } from '@angular/core';
import { FieldItem } from 'src/app/models/field-item';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-submit',
  templateUrl: './submit.component.html',
  styleUrls: ['./submit.component.css']
})
export class SubmitComponent implements OnInit {

  @Input() field: FieldItem;

  @Input() group: FormGroup;

  constructor() { }

  ngOnInit() {
  }

}
