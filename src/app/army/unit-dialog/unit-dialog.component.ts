import { Component, OnInit } from '@angular/core';
import { UnitService } from 'app/army/unit.service';
import { UnitDialogService } from './unit-dialog.service';

@Component({
  selector: 'aom-unit-dialog',
  templateUrl: './unit-dialog.component.html',
  styleUrls: ['./unit-dialog.component.css']
})
export class UnitDialogComponent implements OnInit {

  constructor(public unitDialogService : UnitDialogService, public unitService : UnitService) { 
  }

  ngOnInit(): void {
  }

}
