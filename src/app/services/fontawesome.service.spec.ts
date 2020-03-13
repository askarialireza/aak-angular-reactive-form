/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { FontawesomeService } from './fontawesome.service';

describe('Service: Fontawesome', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FontawesomeService]
    });
  });

  it('should ...', inject([FontawesomeService], (service: FontawesomeService) => {
    expect(service).toBeTruthy();
  }));
});
