<script setup lang="ts">
import { ref, computed } from 'vue'
import { unitService } from '@/services/unitService'
import type { Unit } from '@/types/unit'
import UnitCard from '@/components/UnitCard.vue'

const filterForm = ref<{ [key: string]: boolean }>({
  egyptian: true,
  greek: true,
  norse: true
})

const filteredUnits = computed((): Unit[] => {
  return unitService.getAllUnits().filter((u) => filterForm.value[u.race])
})
</script>

<template>
  <div class="bg-near-white w-100 pa2 mb2">
    <strong>Filter: </strong>
    <label v-for="race in ['egyptian', 'greek', 'norse']" :key="race" class="mh2">
      <input type="checkbox" v-model="filterForm[race]" />
      {{ race.charAt(0).toUpperCase() + race.slice(1) }}
    </label>
  </div>
  <div class="flex flex-wrap">
    <div v-for="unit in filteredUnits" :key="unit.name">
      <UnitCard :unit="unit" />
    </div>
  </div>
</template>

<style scoped>
/* Component-specific styles if needed */
</style>
