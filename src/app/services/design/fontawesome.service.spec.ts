/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { FontAwesomeService } from './fontawesome.service';

describe('Service: Fontawesome', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FontAwesomeService]
    });
  });

  it('should ...', inject([FontAwesomeService], (service: FontAwesomeService) => {
    expect(service).toBeTruthy();
  }));
});
