<script setup lang="ts">
import type { Unit } from '@/types/unit'
import UnitCardContent from './UnitCardContent.vue'

defineProps<{
  opponents: Unit[]
}>()
</script>

<template>
  <div v-for="enemy in opponents" :key="enemy.name" class="w5 dib ba b--black pa1 ma1" :class="enemy.race">
    <UnitCardContent :hide="['cost', 'bonuses', 'special']" :unit="enemy" />
  </div>
</template>

