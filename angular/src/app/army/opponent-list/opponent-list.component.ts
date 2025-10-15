import { Component, Input, OnInit } from '@angular/core';
import { Unit } from 'app/army/unit';
import { UnitService } from 'app/army/unit.service';

@Component({
  selector: 'aom-opponent-list',
  templateUrl: './opponent-list.component.html',
  styleUrls: ['./opponent-list.component.css']
})
export class OpponentListComponent implements OnInit {

  @Input("opponents") opponents : Unit[];

  constructor() { }

  ngOnInit(): void {
  }

}
