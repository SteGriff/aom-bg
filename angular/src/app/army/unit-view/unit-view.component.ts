import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Unit } from 'app/army/unit';
import { UnitService } from 'app/army/unit.service';

@Component({
  selector: 'aom-unit-view',
  templateUrl: './unit-view.component.html',
  styleUrls: ['./unit-view.component.css']
})
export class UnitViewComponent implements OnInit {

  @Input("unit") unit : Unit;
  
  filterForm = new FormGroup({
    "egyptian" : new FormControl(true),
    "greek" : new FormControl(true),
    "norse" : new FormControl(true)
  });

  constructor(public unitService : UnitService) { 
  }

  ngOnInit(): void {
  }

  filteredUnitsBeatenByMe() : Unit[] {
    const basis = this.unitService.getUnitsBeatenBy(this.unit);
    return basis.filter(u => this.filterForm.value[u.race]);
  }
  
  filteredUnitsThatBeatMe() : Unit[] {
    const basis = this.unitService.getUnitsThatBeat(this.unit);
    return basis.filter(u => this.filterForm.value[u.race]);
  }

}
