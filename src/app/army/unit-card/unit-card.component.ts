import { Component, Input, OnInit } from '@angular/core';
import { Unit } from 'app/army/unit';
import { UnitClass } from '../unitClass';
import { UnitDialogService } from '../unit-dialog/unit-dialog.service';

@Component({
  selector: 'aom-unit-card',
  templateUrl: './unit-card.component.html',
  styleUrls: ['./unit-card.component.css']
})
export class UnitCardComponent implements OnInit {

  constructor(public unitDialogService : UnitDialogService) { }

  @Input("unit") unit: Unit;

  ngOnInit(): void {
  }
  
}
