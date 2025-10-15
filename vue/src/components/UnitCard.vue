<script setup lang="ts">
import type { Unit } from '@/types/unit'
import { RouterLink } from 'vue-router'
import UnitCardContent from './UnitCardContent.vue'

defineProps<{
  unit: Unit
}>()
</script>

<template>
  <RouterLink :to="{ name: 'unit', params: { unitName: unit.name } }" class="link black">
    <div class="br4 ma1 ma3-ns pv1 pv2-ns ph3 w5 grow pointer" :class="unit.race">
      <UnitCardContent :unit="unit" />
    </div>
  </RouterLink>
</template>

<style scoped>
.grow {
  transition: transform 0.2s;
}

.grow:hover {
  transform: scale(1.05);
}

.pointer {
  cursor: pointer;
}

.egyptian {
  background-color: #ffeaa7;
}

.greek {
  background-color: #74b9ff;
}

.norse {
  background-color: #a29bfe;
}
</style>
