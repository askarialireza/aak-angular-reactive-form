/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { FormCreateService } from './form-create.service';

describe('Service: FormCreate', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FormCreateService]
    });
  });

  it('should ...', inject([FormCreateService], (service: FormCreateService) => {
    expect(service).toBeTruthy();
  }));
});
