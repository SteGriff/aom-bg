import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Unit } from 'app/army/unit';
import { UnitClass } from 'app/army/unitClass';
import { UnitType } from 'app/army/unitType';
import { Race } from 'app/common/race';
import { ResourceType } from 'app/common/resourceType';
import { MocksModule } from 'app/test/mocks/mocks.module';

import { UnitCardComponent } from './unit-card.component';

describe('UnitCardComponent', () => {
  let component: UnitCardComponent;
  let fixture: ComponentFixture<UnitCardComponent>;

  const mockUnit: Unit = {
    name: "Spearman",
    race: Race.Egyptian,
    classes: [UnitClass.Warrior],
    type: UnitType.Mortal,
    baseDice: 3,
    unitCost: [
      { resource: ResourceType.Food, qty: 1 },
      { resource: ResourceType.Wood, qty: 1 }
    ]
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MocksModule],
      declarations: [UnitCardComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UnitCardComponent);
    component = fixture.componentInstance;
    component.unit = mockUnit;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
