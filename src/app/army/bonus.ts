import { UnitClass } from 'app/army/unitClass';

export interface Bonus
{
    targetClass : UnitClass;
    diceBonus : number;
}