import { Component, Output, EventEmitter } from '@angular/core';
import { BaseComponent } from '../../../../infrastructure/base-component';
import { HttpEventType, HttpClient } from '@angular/common/http';
import { UploadApiService } from '../../../../services/api/upload.api.service';
import * as $ from 'jquery';


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
  styleUrls: ['./upload.component.css']
})
export class UploadComponent extends BaseComponent {

  @Output() public onUploadFinished = new EventEmitter();

  public status: UploadStatus;

  public progress: number;
  public uploadMessage: string;
  public fileName: string;

  constructor(private uploadApiService: UploadApiService, private http: HttpClient) {
    super();
    this.progress = 0;
    this.status = UploadStatus.NoFileSelected;
  }

  ngOnInit() {
  }

  onSelectedFile(files) {
    this.status = UploadStatus.FileSelected;
    let fileToUpload = <File>files[0];
    this.fileName = fileToUpload.name;
  }

  onClearFile(e) {
    this.status = UploadStatus.NoFileSelected;
    this.progress = 0;
    $(`#file_${this.field.name}`).val('');
    this.group.get(this.field.name).setValue(null);
  }

  public onUploadFile = (files) => {
    if (files) {
      if (files.length === 0) {
        return;
      }

      let fileToUpload = <File>files[0];
      this.fileName = fileToUpload.name;
      const formData = new FormData();
      formData.append('file', fileToUpload, fileToUpload.name);

      this.uploadApiService.uploadFile(formData)
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
