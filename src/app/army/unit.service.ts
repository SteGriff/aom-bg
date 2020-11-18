import { Injectable } from '@angular/core';
import { Unit } from 'app/army/unit';
import { UnitClass } from 'app/army/unitClass';
import { UnitType } from 'app/army/unitType';
import { Race } from 'app/common/race';
import { ResourceType } from 'app/common/resourceType';

@Injectable({
  providedIn: 'root'
})
export class UnitService {

  private allUnits: Unit[];

  constructor() {
    this.allUnits = [
      {
        name: "Spearman",
        race: Race.Egyptian,
        classes: [UnitClass.Warrior],
        type: UnitType.Mortal,
        baseDice: 3,
        unitCost: [
          { resource: ResourceType.Food, qty: 1 },
          { resource: ResourceType.Wood, qty: 1 }
        ]
      },
      {
        name: "Hippokon",
        race: Race.Greek,
        classes: [UnitClass.Warrior],
        type: UnitType.Mortal,
        baseDice: 3,
        unitCost: [
          { resource: ResourceType.Food, qty: 1 },
          { resource: ResourceType.Wood, qty: 1 }
        ]
      },
    ]

  }

  getAllUnits() {
    return this.allUnits;
  }

}
