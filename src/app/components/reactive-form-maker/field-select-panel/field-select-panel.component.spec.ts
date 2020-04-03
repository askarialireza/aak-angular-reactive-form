import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FieldSelectPanelComponent } from './field-select-panel.component';

describe('FieldSelectPanelComponent', () => {
  let component: FieldSelectPanelComponent;
  let fixture: ComponentFixture<FieldSelectPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FieldSelectPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FieldSelectPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
