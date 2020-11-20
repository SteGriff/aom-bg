import { Component, Input, OnInit } from '@angular/core';
import { Unit } from 'app/army/unit';
import { UnitService } from 'app/army/unit.service';

@Component({
  selector: 'aom-unit-view',
  templateUrl: './unit-view.component.html',
  styleUrls: ['./unit-view.component.css']
})
export class UnitViewComponent implements OnInit {

  @Input("unit") unit : Unit;

  constructor(public unitService : UnitService) { 
  }

  ngOnInit(): void {
  }
  
}
