<script setup lang="ts">
import type { Unit } from '@/types/unit'
import { UnitClass } from '@/types/unitClass'
import Cube from './CubeIcon.vue'

const props = defineProps<{
  unit: Unit
  hide?: string[]
}>()

const hidden = (section: string): boolean => {
  return props.hide?.some((s) => s === section) || false
}

const allClasses = (): string[] => {
  return [props.unit.type, ...props.unit.classes]
}

const bonusWidthCssClass = (unit: Unit): string => {
  return unit.bonuses?.some((b) => b.targetClass === UnitClass.GiantKiller)
    ? 'bonus-wide'
    : 'bonus-narrow'
}

const titleCase = (str: string): string => {
  return str.charAt(0).toUpperCase() + str.slice(1)
}
</script>

<template>
  <p v-if="!hidden('header')" class="tc b">
    <span class="fl pa1 mt--1 bg-white tc b dib w1 h1">{{ unit.baseDice }}</span>
    {{ unit.name }}
    <span class="fr icon" :class="unit.type + '-icon'" :title="titleCase(unit.type)"></span>
  </p>
  <p v-if="!hidden('classes')" class="tc serif">
    <span v-if="unit.age" class="small-caps">{{ unit.age }}&nbsp;</span>
    <span v-for="(aClass, index) in allClasses()" :key="aClass" class="i">
      {{ titleCase(aClass) }}{{ index < allClasses().length - 1 ? ', ' : '' }}
    </span>
  </p>
  <p v-if="!hidden('cost')" class="tc pv1">
    <span v-for="cost in unit.cost" :key="cost.resource" class="mh1">
      {{ cost.qty }} &times; <Cube :resource="cost.resource" />
    </span>
  </p>
  <div
    v-if="!hidden('bonuses') && unit.bonuses && unit.bonuses.length > 0"
    class="mv2 center"
    :class="bonusWidthCssClass(unit)"
  >
    <p v-for="(bonus, index) in unit.bonuses" :key="index" class="mv2">
      <b>+</b>
      <span class="pa1 mt--1 bg-white tc b dib w1 h1">
        {{ bonus.diceBonus }}
      </span>
      <span class="small-caps f6"> vs </span>
      {{ titleCase(bonus.targetClass) }}
    </p>
  </div>
  <div v-if="!hidden('special') && unit.specialText">
    <p class="mt3 mb0 tc small-caps b f6">Special</p>
    <p class="mv1 f6 tc">{{ unit.specialText }}</p>
  </div>
</template>
