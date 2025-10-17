import type { UnitClass } from './unitClass'
import type { UnitType } from './unitType'

export interface Bonus {
    targetClass: UnitClass | UnitType
    diceBonus: number
}
