import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Unit } from 'app/army/unit';
import { UnitService } from 'app/army/unit.service';

@Component({
  selector: 'aom-unit-list',
  templateUrl: './unit-list.component.html',
  styleUrls: ['./unit-list.component.css']
})
export class UnitListComponent implements OnInit {
 
  filterForm = new FormGroup({
    "egyptian" : new FormControl(true),
    "greek" : new FormControl(true),
    "norse" : new FormControl(true)
  });

  constructor(public unitService: UnitService) {
  }

  ngOnInit(): void {
  }

  filteredUnits() : Unit[] {
    console.log(this.filterForm.value);
    return this.unitService.getAllUnits().filter(u => this.filterForm.value[u.race]);
  }
 
}
