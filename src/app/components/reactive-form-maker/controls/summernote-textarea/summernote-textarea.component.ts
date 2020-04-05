import { Component, OnInit, Input } from '@angular/core';
import { BaseComponent } from '../../../../infrastructure/base-component';
import * as Models from '../../../../exports/model.namespace';

@Component({
  selector: 'app-summernote-textarea',
  templateUrl: './summernote-textarea.component.html',
  styleUrls: ['./summernote-textarea.component.css']
})
export class SummernoteTextareaComponent extends BaseComponent {

  public config;
  @Input() field: Models.SummernoteFieldItem;
  constructor() {
    super()
  }

  ngOnInit() {
    this.config = {
      placeholder: this.getPlaceHolder(),
      tabsize: 2,
      height: this.getHeight(),
      uploadImagePath: this.getUploadPath(),
      lang: 'fa-IR',
      toolbar: [
        ['misc', ['codeview', 'undo', 'redo']],
        ['style', ['bold', 'italic', 'underline', 'clear']],
        ['font', ['bold', 'italic', 'underline', 'strikethrough','clear']],
        ['fontsize', ['fontname', 'fontsize', 'color']],
        ['para', ['ul', 'ol', 'paragraph', 'height']],
        //['insert', ['table', 'picture', 'link', 'video', 'hr']]
      ],
      fontNames: ['Helvetica', 'Arial', 'Arial Black', 'Comic Sans MS', 'Courier New', 'Roboto', 'Times']
    };
  }

  getPlaceHolder() {
    let placeholder: string;

    if (this.field.placeholder) {
      placeholder = this.field.placeholder;

    }
    else {
      placeholder = '';
    }

    return placeholder;
  }

  getHeight() {
    let height: number;

    if (this.field.height) {
      height = this.field.height;
    }
    else {
      height = 200;
    }

    return height;

  }

  getUploadPath() {
    let upload: string;

    if (this.field.uploadPath === null || this.field.uploadPath === undefined) {
      upload = '';
    }
    else {
      upload = this.field.placeholder;
    }

    return upload;
  }
}
