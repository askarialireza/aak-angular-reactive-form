import { Component, OnInit } from '@angular/core';
import { BaseComponent } from '../../../infrastructure/base-component';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent extends BaseComponent {

  constructor() {
    super();
  }

  ngOnInit() {
  }

  modelChanged(e) {
    console.log(e);
  }

  onSelectedFilesChanged(e) {
    console.log(e);
  }

  onUploadClicked(e) {
    console.log(e);
  }

}