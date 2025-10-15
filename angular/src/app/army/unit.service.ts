import { Injectable } from '@angular/core';
import { Unit } from 'app/army/unit';
import { allUnitsData } from 'app/army/allUnitsData';

@Injectable({
  providedIn: 'root'
})
export class UnitService {

  private allUnits: Unit[];

  constructor() {
    this.allUnits = allUnitsData;
  }

  getByName(name : string) : Unit
  {
    return this.allUnits.filter(u => u.name === name)[0];
  }

  getAllUnits() : Unit[] {
    return this.allUnits;
  }

  getUnitsBeatenBy(myUnit: Unit) : Unit[] {
    if (!myUnit.bonuses) return [];

    return this.allUnits
    .filter(u => u.race != myUnit.race)
    .filter(
      enemyUnit => myUnit.bonuses?.some(bonus => enemyUnit.classes?.some(euClass => bonus.targetClass == euClass))
      || myUnit.bonuses?.some(bonus => bonus.targetClass == enemyUnit.type)
      );
  }

  getUnitsThatBeat(myUnit: Unit) : Unit[] {
    return this.allUnits
    .filter(u => u.race != myUnit.race)
    .filter(
      enemyUnit => enemyUnit.bonuses?.some(bonus => myUnit.classes?.some(myClass => bonus.targetClass == myClass))
      || enemyUnit.bonuses?.some(bonus => bonus.targetClass == myUnit.type)
      );
  }
}
