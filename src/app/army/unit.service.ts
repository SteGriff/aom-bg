import { Injectable } from '@angular/core';
import { Unit } from 'app/army/unit';
import { UnitClass } from 'app/army/unitClass';
import { UnitType } from 'app/army/unitType';
import { Race } from 'app/common/race';
import { ResourceType } from 'app/common/resourceType';

@Injectable({
  providedIn: 'root'
})
export class UnitService {

  private allUnits: Unit[];

  constructor() {
    this.allUnits = [
      {
        name: "Chariot Archer",
        race: Race.Egyptian,
        classes: [UnitClass.Archer, UnitClass.Cavalry],
        type: UnitType.Mortal,
        baseDice: 3,
        cost: [
          { resource: ResourceType.Wood, qty: 1 },
          { resource: ResourceType.Gold, qty: 1 },
        ],
        bonuses: [
          { diceBonus: 3, targetClass: UnitClass.Flyer },
          { diceBonus: 3, targetClass: UnitClass.Warrior },
        ]
      },
      {
        name: "Spearman",
        race: Race.Egyptian,
        classes: [UnitClass.Warrior],
        type: UnitType.Mortal,
        baseDice: 3,
        cost: [
          { resource: ResourceType.Food, qty: 1 },
          { resource: ResourceType.Wood, qty: 1 }
        ],
        bonuses: [
          { diceBonus: 3, targetClass: UnitClass.Cavalry },
          { diceBonus: 4, targetClass: UnitType.Hero },
        ]
      },
      {
        name: "Elephant",
        race: Race.Egyptian,
        classes: [UnitClass.Giant],
        type: UnitType.Mortal,
        baseDice: 3,
        cost: [
          { resource: ResourceType.Food, qty: 2 },
          { resource: ResourceType.Gold, qty: 1 }
        ],
        bonuses: [
          { diceBonus: 2, targetClass: UnitType.Mortal },
        ],
        specialText: "Negates the effect of Walls and Towers"
      },
      {
        name: "Mummy",
        race: Race.Egyptian,
        classes: [],
        type: UnitType.Myth,
        baseDice: 5,
        cost: [
          { resource: ResourceType.Gold, qty: 3 },
          { resource: ResourceType.Favour, qty: 2 }
        ],
        specialText: "When the Mummy defeats an opponent in battle, a new mummy is gained and placed on the player's board (if available)."
      },
      {
        name: "Scorpion-Man",
        race: Race.Egyptian,
        classes: [UnitClass.Giant],
        type: UnitType.Myth,
        baseDice: 5,
        cost: [
          { resource: ResourceType.Food, qty: 4 },
          { resource: ResourceType.Gold, qty: 2 }
        ],
        bonuses: [
          { diceBonus: 4, targetClass: UnitType.Mortal },
        ]
      },
      {
        name: "Sphinx",
        race: Race.Egyptian,
        classes: [UnitClass.GiantKiller],
        type: UnitType.Myth,
        baseDice: 5,
        cost: [
          { resource: ResourceType.Gold, qty: 2 },
          { resource: ResourceType.Favour, qty: 2 }
        ],
        bonuses: [
          { diceBonus: 6, targetClass: UnitClass.Giant },
        ]
      },
      {
        name: "Hippokon",
        race: Race.Greek,
        classes: [UnitClass.Warrior],
        type: UnitType.Mortal,
        baseDice: 3,
        cost: [
          { resource: ResourceType.Food, qty: 1 },
          { resource: ResourceType.Wood, qty: 1 }
        ]
      },
    ]

  }

  getAllUnits() {
    return this.allUnits;
  }

}
