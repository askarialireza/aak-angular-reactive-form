/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { Fielditem.apiService } from './fielditem.api.service';

describe('Service: Fielditem.api', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Fielditem.apiService]
    });
  });

  it('should ...', inject([Fielditem.apiService], (service: Fielditem.apiService) => {
    expect(service).toBeTruthy();
  }));
});
