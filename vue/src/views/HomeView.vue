<script setup lang="ts">
import UnitList from '@/components/UnitList.vue'

const title = 'Age of Mythology'
</script>

<template>
  <div>
    <h1 class="mv2 near-white">
      {{ title }} <small class="db">Board Game Units</small>
    </h1>

    <UnitList />
  </div>
</template>

