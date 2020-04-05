import { Pipe, PipeTransform } from '@angular/core';

export enum FileSizeUnit {
    B = 'بایت',
    KB = 'کیلوبایت',
    MB = 'مگابایت',
    GB = 'گیگابایت',
}

export enum FileSizeValue {
    B = 1,
    KB = 1024,
    MB = 1024 * 1024,
    GB = 1024 * 1024 * 1024,
}

@Pipe({
  name: 'filesize'
})
export class FileSizePipe implements PipeTransform {
  transform(size: number) {
    if(size >= FileSizeValue.GB) {
        return `${(size / FileSizeValue.GB).toFixed(2)} ${FileSizeUnit.GB}`;
    }
    if(size >= FileSizeValue.MB) {
        return `${(size / FileSizeValue.MB).toFixed(2)} ${FileSizeUnit.MB}`;
    }
    if(size >= FileSizeValue.KB) {
        return `${(size / FileSizeValue.KB).toFixed(2)} ${FileSizeUnit.KB}`;
    }
    if(size >= FileSizeValue.B) {
        return `${(size / FileSizeValue.B).toFixed(2)} ${FileSizeUnit.B}`;
    }
  }
}