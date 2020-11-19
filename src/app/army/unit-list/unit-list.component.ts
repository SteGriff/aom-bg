import { Component, OnInit } from '@angular/core';
import { Unit } from 'app/army/unit';
import { UnitService } from 'app/army/unit.service';

@Component({
  selector: 'aom-unit-list',
  templateUrl: './unit-list.component.html',
  styleUrls: ['./unit-list.component.css']
})
export class UnitListComponent implements OnInit {

  constructor(public unitService: UnitService) {
  }

  public allUnits: Unit[];

  ngOnInit(): void {
    this.allUnits = this.unitService.getAllUnits();
  }

}
