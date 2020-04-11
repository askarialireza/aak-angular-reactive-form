/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { WidthComponent } from './width.component';

describe('WidthComponent', () => {
  let component: WidthComponent;
  let fixture: ComponentFixture<WidthComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WidthComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WidthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
