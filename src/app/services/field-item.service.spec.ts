/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { FieldItemService } from './field-item.service';

describe('Service: FieldItem', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FieldItemService]
    });
  });

  it('should ...', inject([FieldItemService], (service: FieldItemService) => {
    expect(service).toBeTruthy();
  }));
});
