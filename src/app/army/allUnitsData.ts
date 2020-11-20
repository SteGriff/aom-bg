import { UnitClass } from 'app/army/unitClass';
import { UnitType } from 'app/army/unitType';
import { Age } from 'app/common/age';
import { Race } from 'app/common/race';
import { ResourceType } from 'app/common/resourceType';

export const allUnitsData = [
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
      name: "Phoenix",
      race: Race.Egyptian,
      classes: [UnitClass.Flyer],
      type: UnitType.Myth,
      baseDice: 6,
      cost: [
        { resource: ResourceType.Wood, qty: 2 },
        { resource: ResourceType.Favour, qty: 3 }
      ],
      bonuses: [
        { diceBonus: 4, targetClass: UnitClass.GiantKiller },
      ],
      specialText: "Can be resurrected immediately after being eliminated (and returned to the owning player's board) if there is a Priest unit in the battle on his side. The cost of resurrection is 2 Favour."
    },
    {
      name: "Wadjet",
      race: Race.Egyptian,
      classes: [UnitClass.Warrior],
      type: UnitType.Myth,
      baseDice: 5,
      cost: [
        { resource: ResourceType.Food, qty: 2 },
        { resource: ResourceType.Favour, qty: 2 }
      ],
      bonuses: [
        { diceBonus: 4, targetClass: UnitClass.Cavalry },
      ],
      specialText: "May take the Pharaoh's place in an encounter."
    },
    {
      name: "Anubite",
      race: Race.Egyptian,
      classes: [UnitClass.Cavalry],
      type: UnitType.Myth,
      baseDice: 5,
      cost: [
        { resource: ResourceType.Gold, qty: 3 },
        { resource: ResourceType.Favour, qty: 1 }
      ],
      bonuses: [
        { diceBonus: 4, targetClass: UnitClass.Archer },
      ]
    },
    {
      name: "Priest",
      race: Race.Egyptian,
      classes: [],
      type: UnitType.Hero,
      age: Age.Classical,
      baseDice: 4,
      cost: [
        { resource: ResourceType.Food, qty: 2 },
        { resource: ResourceType.Gold, qty: 4 }
      ],
      bonuses: [
        { diceBonus: 5, targetClass: UnitType.Myth },
      ],
      specialText: "May resurrect a Phoenix (for 2 Favour) or the Son of Osiris (for 4 Favour) immediately after they have been eliminated in a battle. When resurrected, they are returned to the owning player's board."
    },
    {
      name: "Pharaoh",
      race: Race.Egyptian,
      classes: [],
      type: UnitType.Hero,
      age: Age.Heroic,
      baseDice: 6,
      cost: [
        { resource: ResourceType.Food, qty: 3 },
        { resource: ResourceType.Gold, qty: 3 }
      ],
      bonuses: [
        { diceBonus: 4, targetClass: UnitType.Myth },
      ],
      specialText: "After seeing his opponent, a Wadjet may take the Pharaoh's place in the encounter (if there's a Wadjet in the battle)."
    },
    {
      name: "Son of Osiris",
      race: Race.Egyptian,
      classes: [],
      type: UnitType.Hero,
      age: Age.Mythic,
      baseDice: 8,
      cost: [
        { resource: ResourceType.Gold, qty: 4 },
        { resource: ResourceType.Favour, qty: 4 }
      ],
      bonuses: [
        { diceBonus: 4, targetClass: UnitType.Myth },
      ],
      specialText: "Can be resurrected immediately after being eliminated (and returned to the owning player's board) if there is a Priest unit in the battle on his side. The cost of resurrection is 4 Favour."
    },
    {
      name: "Jarl",
      race: Race.Norse,
      classes: [UnitClass.Cavalry],
      type: UnitType.Mortal,
      baseDice: 3,
      cost: [
        { resource: ResourceType.Food, qty: 1 },
        { resource: ResourceType.Gold, qty: 1 }
      ],
      bonuses: [
        { diceBonus: 4, targetClass: UnitType.Hero },
        { diceBonus: 4, targetClass: UnitClass.Archer },
      ]
    },
    {
      name: "Throwing Axeman",
      race: Race.Norse,
      classes: [UnitClass.Archer],
      type: UnitType.Mortal,
      baseDice: 3,
      cost: [
        { resource: ResourceType.Food, qty: 1 },
        { resource: ResourceType.Wood, qty: 1 }
      ],
      bonuses: [
        { diceBonus: 3, targetClass: UnitClass.Warrior },
        { diceBonus: 4, targetClass: UnitClass.Flyer },
      ]
    },
    {
      name: "Huskarl",
      race: Race.Norse,
      classes: [UnitClass.Warrior],
      type: UnitType.Mortal,
      baseDice: 3,
      cost: [
        { resource: ResourceType.Food, qty: 1 },
        { resource: ResourceType.Gold, qty: 2 }
      ],
      bonuses: [
        { diceBonus: 4, targetClass: UnitClass.Cavalry },
      ],
      specialText: 'May "go berserk" and add 2 dice. Loses ties when going berserk.'
    },
    {
      name: "Nidhogg",
      race: Race.Norse,
      classes: [UnitClass.Flyer],
      type: UnitType.Myth,
      baseDice: 7,
      cost: [
        { resource: ResourceType.Gold, qty: 4 },
        { resource: ResourceType.Favour, qty: 1 }
      ],
      bonuses: [
        { diceBonus: 4, targetClass: UnitClass.GiantKiller },
      ],
      specialText: "Destroys 2 buildings if it survives a successful attack on a city."
    },
    {
      name: "Valkyrie",
      race: Race.Norse,
      classes: [UnitClass.Cavalry],
      type: UnitType.Myth,
      baseDice: 5,
      cost: [
        { resource: ResourceType.Gold, qty: 1 },
        { resource: ResourceType.Favour, qty: 3 }
      ],
      bonuses: [
        { diceBonus: 4, targetClass: UnitClass.Archer },
      ],
      specialText: "2 Favour gained for each unit eliminated by a Valkyrie."
    },
    {
      name: "Frost Giant",
      race: Race.Norse,
      classes: [UnitClass.Giant],
      type: UnitType.Myth,
      baseDice: 7,
      cost: [
        { resource: ResourceType.Food, qty: 4 },
        { resource: ResourceType.Favour, qty: 2 }
      ],
      bonuses: [
        { diceBonus: 2, targetClass: UnitClass.Warrior },
        { diceBonus: 3, targetClass: UnitType.Mortal },
      ]
    },
    {
      name: "Troll",
      race: Race.Norse,
      classes: [UnitClass.Warrior],
      type: UnitType.Myth,
      baseDice: 6,
      cost: [
        { resource: ResourceType.Food, qty: 3 },
        { resource: ResourceType.Wood, qty: 2 }
      ],
      bonuses: [
        { diceBonus: 4, targetClass: UnitClass.Cavalry },
      ]
    },
    {
      name: "Dwarf",
      race: Race.Norse,
      classes: [UnitClass.GiantKiller],
      type: UnitType.Myth,
      baseDice: 4,
      cost: [
        { resource: ResourceType.Food, qty: 2 },
        { resource: ResourceType.Gold, qty: 2 }
      ],
      bonuses: [
        { diceBonus: 7, targetClass: UnitClass.Giant },
      ],
      specialText: "Negates the effect of Walls and Towers as long as he is in the battle. Gather +2 Gold when Dwarf is on a Gold Production tile (like a Villager)."
    },
    {
      name: "Classical Norse Hero",
      race: Race.Norse,
      classes: [],
      type: UnitType.Hero,
      age: Age.Classical,
      baseDice: 5,
      cost: [
        { resource: ResourceType.Food, qty: 3 },
        { resource: ResourceType.Gold, qty: 3 }
      ],
      bonuses: [
        { diceBonus: 4, targetClass: UnitType.Myth },
      ]
    },
    {
      name: "Heroic Norse Hero",
      race: Race.Norse,
      classes: [],
      type: UnitType.Hero,
      age: Age.Heroic,
      baseDice: 6,
      cost: [
        { resource: ResourceType.Food, qty: 3 },
        { resource: ResourceType.Gold, qty: 3 }
      ],
      bonuses: [
        { diceBonus: 4, targetClass: UnitType.Myth },
      ],
      specialText: 'May "go berserk" and add 2 dice. Loses ties when going berserk.'
    },
    {
      name: "Mythic Norse Hero",
      race: Race.Norse,
      classes: [],
      type: UnitType.Hero,
      age: Age.Mythic,
      baseDice: 8,
      cost: [
        { resource: ResourceType.Food, qty: 4 },
        { resource: ResourceType.Favour, qty: 4 }
      ],
      bonuses: [
        { diceBonus: 4, targetClass: UnitType.Myth }
      ],
      specialText: "For each unit eliminated by the Norse Mythic Hero, the Norse player may add a unit into the battle from his holding area."
    },
    {
      name: "Hoplite",
      race: Race.Greek,
      classes: [UnitClass.Warrior],
      type: UnitType.Mortal,
      baseDice: 3,
      cost: [
        { resource: ResourceType.Food, qty: 1 },
        { resource: ResourceType.Wood, qty: 1 }
      ],
      bonuses: [
        { diceBonus: 3, targetClass: UnitClass.Cavalry },
        { diceBonus: 1, targetClass: UnitType.Mortal }
      ],
    },
    {
      name: "Hippokon",
      race: Race.Greek,
      classes: [UnitClass.Cavalry],
      type: UnitType.Mortal,
      baseDice: 3,
      cost: [
        { resource: ResourceType.Food, qty: 1 },
        { resource: ResourceType.Gold, qty: 1 }
      ],
      bonuses: [
        { diceBonus: 4, targetClass: UnitClass.Archer },
        { diceBonus: 4, targetClass: UnitType.Hero }
      ],
    },
    {
      name: "Toxotes",
      race: Race.Greek,
      classes: [UnitClass.Archer],
      type: UnitType.Mortal,
      baseDice: 3,
      cost: [
        { resource: ResourceType.Food, qty: 1 },
        { resource: ResourceType.Wood, qty: 1 }
      ],
      bonuses: [
        { diceBonus: 4, targetClass: UnitClass.Flyer },
        { diceBonus: 3, targetClass: UnitClass.Warrior }
      ],
    },
    {
      name: "Hydra",
      race: Race.Greek,
      classes: [UnitClass.Giant],
      type: UnitType.Myth,
      baseDice: 6,
      cost: [
        { resource: ResourceType.Gold, qty: 2 },
        { resource: ResourceType.Favour, qty: 2 }
      ],
      bonuses: [
        { diceBonus: 4, targetClass: UnitClass.Warrior }
      ],
      specialText: "+1 battle die for each unit eliminated by the Hydra in that particular battle."
    },
    {
      name: "Cyclops",
      race: Race.Greek,
      classes: [UnitClass.Giant],
      type: UnitType.Myth,
      baseDice: 6,
      cost: [
        { resource: ResourceType.Food, qty: 3 },
        { resource: ResourceType.Favour, qty: 3 }
      ],
      bonuses: [
        { diceBonus: 4, targetClass: UnitType.Mortal }
      ],
      specialText: "Negates the effect of Walls and Towers. May choose to throw his opponent out of the battle instead of attacking normally. +3 when throwing. May not throw Giant units."
    },
    {
      name: "Minotaur",
      race: Race.Greek,
      classes: [UnitClass.Warrior],
      type: UnitType.Myth,
      baseDice: 5,
      cost: [
        { resource: ResourceType.Food, qty: 2 },
        { resource: ResourceType.Wood, qty: 2 }
      ],
      bonuses: [
        { diceBonus: 4, targetClass: UnitClass.Cavalry }
      ],
      specialText: "Destroys 2 buildings if it survives a successful attack on a city."
    },
    {
      name: "Manticore",
      race: Race.Greek,
      classes: [UnitClass.Flyer],
      type: UnitType.Myth,
      baseDice: 5,
      cost: [
        { resource: ResourceType.Food, qty: 2 },
        { resource: ResourceType.Favour, qty: 2 }
      ],
      bonuses: [
        { diceBonus: 4, targetClass: UnitClass.GiantKiller }
      ]
    },
    {
      name: "Centaur",
      race: Race.Greek,
      classes: [UnitClass.Archer, UnitClass.Cavalry],
      type: UnitType.Myth,
      baseDice: 5,
      cost: [
        { resource: ResourceType.Wood, qty: 3 },
        { resource: ResourceType.Favour, qty: 1 }
      ],
      bonuses: [
        { diceBonus: 3, targetClass: UnitClass.Archer },
        { diceBonus: 3, targetClass: UnitClass.Flyer }
      ]
    },
    {
      name: "Medusa",
      race: Race.Greek,
      classes: [UnitClass.GiantKiller],
      type: UnitType.Myth,
      baseDice: 5,
      cost: [
        { resource: ResourceType.Food, qty: 1 },
        { resource: ResourceType.Favour, qty: 3 }
      ],
      bonuses: [
        { diceBonus: 6, targetClass: UnitClass.Giant }
      ],
      specialText: "Medusa wins all ties in battle."
    },
    {
      name: "Classical Greek Hero",
      race: Race.Greek,
      classes: [],
      type: UnitType.Hero,
      age: Age.Classical,
      baseDice: 5,
      cost: [
        { resource: ResourceType.Food, qty: 3 },
        { resource: ResourceType.Gold, qty: 3 }
      ],
      bonuses: [
        { diceBonus: 4, targetClass: UnitType.Myth }
      ]
    },
    {
      name: "Heroic Greek Hero",
      race: Race.Greek,
      classes: [],
      type: UnitType.Hero,
      age: Age.Heroic,
      baseDice: 6,
      cost: [
        { resource: ResourceType.Food, qty: 3 },
        { resource: ResourceType.Gold, qty: 4 }
      ],
      bonuses: [
        { diceBonus: 4, targetClass: UnitType.Myth }
      ],
      specialText: "If he defeats an opponent's hero, opponent's army retreats immediately."
    },
    {
      name: "Mythical Greek Hero",
      race: Race.Greek,
      classes: [],
      type: UnitType.Hero,
      age: Age.Mythic,
      baseDice: 5,
      cost: [
        { resource: ResourceType.Gold, qty: 4 },
        { resource: ResourceType.Favour, qty: 4 }
      ],
      specialText: "Adds opponent's base dice number to his own battle dice number to determine his total dice rolled in battle."
    }
  ];