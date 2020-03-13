/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { FormApiService } from './form.api.service';

describe('Service: FormApi', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FormApiService]
    });
  });

  it('should ...', inject([FormApiService], (service: FormApiService) => {
    expect(service).toBeTruthy();
  }));
});
