/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { FieldValidationService } from './field-validation.service';

describe('Service: FieldValidation', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FieldValidationService]
    });
  });

  it('should ...', inject([FieldValidationService], (service: FieldValidationService) => {
    expect(service).toBeTruthy();
  }));
});
