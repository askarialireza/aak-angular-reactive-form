import { Component, Output, EventEmitter, Input } from '@angular/core';
import { BaseComponent } from '../../../infrastructure/base-component';
import { HttpEventType } from '@angular/common/http';
import * as $ from 'jquery';
import * as Models from '../../../models/index';
import * as Services from '../../../services/index';

export enum UploadStatus {
  NoFileSelected = 1,
  FileSelected = 2,
  FileUploading = 3,
  FileUploaded = 4,
  FileUploadError = 5,
}

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css'],
})
export class UploadComponent extends BaseComponent {

  @Output() public onUploadFinished = new EventEmitter();
  @Input() field: Models.UploadFieldItem;

  public status: UploadStatus;
  public progress: number;
  public uploadMessage: string;
  public fileName: string;
  public fileSize: number;

  constructor(private uploadApiService: Services.UploadApiService) {
    super();
    this.progress = 0;
    this.status = UploadStatus.NoFileSelected;
    this.fileSize = 0;
  }

  ngOnInit() {
  }

  onSelectedFile(files) {
    this.status = UploadStatus.FileSelected;
    let fileToUpload = <File>files[0];
    this.fileSize = fileToUpload.size;
    this.fileName = fileToUpload.name;
    if (this.field.required == true) {
      $('.upload-field').removeClass('upload-field-invalid');
      this.group.get(this.field.name).markAsUntouched();
    }
  }

  onClearFile(e) {
    this.status = UploadStatus.NoFileSelected;
    this.progress = 0;
    $(`#file_${this.field.name}`).val('');
    this.group.get(this.field.name).setValue(null);
    if (this.field.required == true) {
      $('.upload-field').addClass('upload-field-invalid');
      this.group.get(this.field.name).markAsTouched();
    }
  }

  onTabKey(e) {
    if (this.group.get(this.field.name).value === null || this.group.get(this.field.name).value === undefined) {
      if (this.field.required == true) {
        $('.upload-field').addClass('upload-field-invalid');
        this.group.get(this.field.name).markAsTouched();
      }
    }
  }

  public onUploadFile = (files) => {
    if (files) {
      if (files.length === 0) {
        return;
      }

      let fileToUpload = <File>files[0];
      this.fileName = fileToUpload.name;
      this.fileSize = fileToUpload.size;
      const formData = new FormData();
      formData.append('file', fileToUpload, fileToUpload.name);

      this.uploadApiService.UploadFile(formData)
        .subscribe(event => {
          if (event.type === HttpEventType.UploadProgress) {
            this.status = UploadStatus.FileUploading;
            this.progress = Math.round(100 * event.loaded / event.total);
            this.uploadMessage = `در حال بارگزاری : ${this.progress}%`;
          }
          else if (event.type === HttpEventType.Response) {
            this.status = UploadStatus.FileUploaded;
            this.onUploadFinished.emit(event.body);
            console.log(event.body);
            this.uploadMessage = 'با موفقیت بارگزاری شد.';
            this.group.get(this.field.name).setValue(event.body);
          }
        });
    }
  }

}
