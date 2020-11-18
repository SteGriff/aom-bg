import { Component, Input, OnInit } from '@angular/core';
import { ResourceType } from 'app/common/resourceType';

@Component({
  selector: 'aom-cube',
  templateUrl: './cube.component.html',
  styleUrls: ['./cube.component.css']
})
export class CubeComponent implements OnInit {

  @Input("resource") resource: ResourceType;

  constructor() { }

  ngOnInit(): void {
  }

}
