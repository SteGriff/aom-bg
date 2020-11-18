import { Bonus } from 'app/army/bonus';
import { UnitClass } from 'app/army/unitClass';
import { UnitType } from 'app/army/unitType';
import { Cost } from 'app/common/cost';
import { Race } from 'app/common/race';

export interface Unit {
    name: string;
    race: Race;
    type: UnitType;
    unitCost : Cost[];
    classes : UnitClass[];
    baseDice : number;
    bonuses? : Bonus[];
    specialText? : string;
}

