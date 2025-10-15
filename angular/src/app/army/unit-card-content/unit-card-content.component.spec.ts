import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnitCardContentComponent } from './unit-card-content.component';

describe('UnitCardContentComponent', () => {
  let component: UnitCardContentComponent;
  let fixture: ComponentFixture<UnitCardContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnitCardContentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UnitCardContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
