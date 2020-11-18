import { Component, Input, OnInit } from '@angular/core';
import { Unit } from 'app/army/unit';

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

}
