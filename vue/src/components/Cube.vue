<script setup lang="ts">
import type { ResourceType } from '@/types/resourceType'

defineProps<{
  resource: ResourceType
}>()
</script>

<template>
  <span class="cube" :class="resource">&nbsp;</span>
</template>

<style scoped>
.cube {
  width: 16px;
  height: 16px;
  border: 2px solid black;
  display: inline-block;
}

.cube.food {
  background: green;
}

.cube.wood {
  background: saddlebrown;
}

.cube.gold {
  background: gold;
}

.cube.favour {
  background: blue;
}
</style>
