/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { Upload.apiService } from './upload.api.service';

describe('Service: Upload.api', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Upload.apiService]
    });
  });

  it('should ...', inject([Upload.apiService], (service: Upload.apiService) => {
    expect(service).toBeTruthy();
  }));
});
