import { UnitClass } from 'app/army/unitClass';
import { UnitType } from 'app/army/unitType';

export interface Bonus
{
    targetClass : UnitClass | UnitType;
    diceBonus : number;
}