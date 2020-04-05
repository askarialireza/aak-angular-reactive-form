/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { FieldItemApiService } from './field-item.api.service';

describe('Service: Fielditem.api', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FieldItemApiService]
    });
  });

  it('should ...', inject([FieldItemApiService], (service: FieldItemApiService) => {
    expect(service).toBeTruthy();
  }));
});
