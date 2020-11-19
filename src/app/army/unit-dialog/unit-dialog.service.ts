import { Injectable } from '@angular/core';
import { Unit } from '../unit';

@Injectable({
  providedIn: 'root'
})
export class UnitDialogService {

  dialogOpen : boolean = false;
  unit : Unit = null;

  constructor() { }

  openDialog(unit : Unit) : void {
    this.dialogOpen = true;
    this.unit = unit;
  }
  
  closeDialog() : void {
    this.dialogOpen = false;
    this.unit = null;
  }

}
