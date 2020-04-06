import { Injectable } from '@angular/core';
import { FormArray, ValidatorFn, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class FieldValidationService {

constructor() { }

minSelectedCheckboxes(min = 1) {
  let selected = 0;
  const validator: ValidatorFn = (formArray: FormArray) => {
    selected = formArray.controls.filter((x, i) => {
      if (x.value != null) {
        return x.value
      }
    }).length;
    return selected >= min ? null : { required: true };
  };

  return validator;
}

bindValidations(validations: any) {

  if (validations.length > 0) {

    const validList = [];

    validations.forEach(valid => {
      validList.push(valid.validator);
    });

    return Validators.compose(validList);
  }
  return null;
}

}
