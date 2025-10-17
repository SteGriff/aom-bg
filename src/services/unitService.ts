import type { Unit } from '@/types/unit'
import { allUnitsData } from '@/data/allUnitsData'

class UnitService {
    private allUnits: Unit[]

    constructor() {
        this.allUnits = allUnitsData
    }

    getByName(name: string): Unit | undefined {
        return this.allUnits.find((u) => u.name === name)
    }

    getAllUnits(): Unit[] {
        return this.allUnits
    }

    getUnitsBeatenBy(myUnit: Unit): Unit[] {
        if (!myUnit.bonuses) return []

        return this.allUnits
            .filter((u) => u.race !== myUnit.race)
            .filter(
                (enemyUnit) =>
                    myUnit.bonuses?.some((bonus) =>
                        enemyUnit.classes?.some((euClass) => bonus.targetClass === euClass)
                    ) || myUnit.bonuses?.some((bonus) => bonus.targetClass === enemyUnit.type)
            )
    }

    getUnitsThatBeat(myUnit: Unit): Unit[] {
        return this.allUnits
            .filter((u) => u.race !== myUnit.race)
            .filter(
                (enemyUnit) =>
                    enemyUnit.bonuses?.some((bonus) =>
                        myUnit.classes?.some((myClass) => bonus.targetClass === myClass)
                    ) || enemyUnit.bonuses?.some((bonus) => bonus.targetClass === myUnit.type)
            )
    }
}

export const unitService = new UnitService()
