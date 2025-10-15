import type { Bonus } from './bonus'
import type { UnitClass } from './unitClass'
import type { UnitType } from './unitType'
import type { Cost } from './cost'
import type { Race } from './race'
import type { Age } from './age'

export interface Unit {
    name: string
    race: Race
    type: UnitType
    age?: Age
    cost: Cost[]
    classes: UnitClass[]
    baseDice: number
    bonuses?: Bonus[]
    specialText?: string
}
