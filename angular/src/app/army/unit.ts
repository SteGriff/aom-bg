import { Bonus } from 'app/army/bonus';
import { UnitClass } from 'app/army/unitClass';
import { UnitType } from 'app/army/unitType';
import { Cost } from 'app/common/cost';
import { Race } from 'app/common/race';
import { Age } from 'app/common/age';

export interface Unit {
    name: string;
    race: Race;
    type: UnitType;
    age? : Age;
    cost : Cost[];
    classes : UnitClass[];
    baseDice : number;
    bonuses? : Bonus[];
    specialText? : string;
}

