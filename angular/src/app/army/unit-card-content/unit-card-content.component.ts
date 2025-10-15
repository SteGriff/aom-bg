import { Component, Input, OnInit } from '@angular/core';
import { Unit } from 'app/army/unit';
import { UnitClass } from 'app/army/unitClass';

@Component({
  selector: 'aom-unit-card-content',
  templateUrl: './unit-card-content.component.html',
  styleUrls: ['./unit-card-content.component.css']
})
export class UnitCardContentComponent implements OnInit {

  @Input("unit") unit: Unit;
  @Input("hide") hide : string[]; // ["header", "classes", "cost", "bonuses", "special"] to hide sections

  constructor() { }

  ngOnInit(): void {
  }

  hidden(section : string) : boolean
  {
    return this.hide?.some(s => s === section);
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
