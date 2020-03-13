import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FontAwesomeService {

  constructor() { }

  getFontAwesomeIconArray(classValue: string) {
    classValue = classValue.trim();
    let array = classValue.split(" ", 2);
    array[1] = array[1].replace('fa-', '');
    return array;
  }

}

