import { Component, Input, OnInit } from '@angular/core';
import { Unit } from 'app/army/unit';
import { UnitType } from '../unitType';
import { UnitClass } from '../unitClass';

@Component({
  selector: 'aom-unit-card',
  templateUrl: './unit-card.component.html',
  styleUrls: ['./unit-card.component.css']
})
export class UnitCardComponent implements OnInit {

  constructor() { }

  @Input("unit") unit: Unit;

  ngOnInit(): void {
  }

  allClasses() : string[]
  {
    return [this.unit.type, ...this.unit.classes];
  }

  bonusWidthCssClass(unit : Unit) : string
  {
    return unit.bonuses?.some(b => b.targetClass == UnitClass.GiantKiller)
      ? "bonus-wide"
      : "bonus-narrow";
  }

}
