<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { unitService } from '@/services/unitService'
import type { Unit } from '@/types/unit'
import UnitCardContent from '@/components/UnitCardContent.vue'
import OpponentList from '@/components/OpponentList.vue'

const route = useRoute()
const router = useRouter()

const unit = ref<Unit | undefined>(undefined)

const filterForm = ref<{ [key: string]: boolean }>({
  egyptian: true,
  greek: true,
  norse: true
})

onMounted(() => {
  const unitName = route.params.unitName as string
  unit.value = unitService.getByName(unitName)

  if (!unit.value) {
    router.push({ name: 'home' })
  }
})

const filteredUnitsBeatenByMe = computed((): Unit[] => {
  if (!unit.value) return []
  const basis = unitService.getUnitsBeatenBy(unit.value)
  return basis.filter((u) => filterForm.value[u.race])
})

const filteredUnitsThatBeatMe = computed((): Unit[] => {
  if (!unit.value) return []
  const basis = unitService.getUnitsThatBeat(unit.value)
  return basis.filter((u) => filterForm.value[u.race])
})
</script>

<template>
  <div v-if="unit">
    <h1 class="near-white">
      <router-link to="/" class="link white">&larr;</router-link>
      {{ unit.name }}
      <span class="pa1 mt--1 bg-white black tc b dib w2">{{ unit.baseDice }}</span>
    </h1>

    <div class="dib ph3 mb3" :class="unit.race">
      <UnitCardContent :hide="['header', 'cost']" :unit="unit" />
    </div>

    <table class="collapse">
      <thead>
        <tr>
          <th class="bg-near-white pa2">Filter</th>
          <td class="bg-near-white pa2">
            <label
              v-for="race in ['egyptian', 'greek', 'norse']"
              :key="race"
              v-show="unit.race !== race"
              class="mh2"
            >
              <input type="checkbox" v-model="filterForm[race]" />
              {{ race.charAt(0).toUpperCase() + race.slice(1) }}
            </label>
          </td>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th class="h5 bg-light-gray">
            <p class="rotate-270">Strong vs</p>
          </th>
          <td class="bg-light-gray">
            <div>
              <OpponentList :opponents="filteredUnitsBeatenByMe" />
            </div>
          </td>
        </tr>
        <tr>
          <th class="h5 bg-moon-gray">
            <p class="rotate-270">Weak vs</p>
          </th>
          <td class="bg-moon-gray">
            <div>
              <OpponentList :opponents="filteredUnitsThatBeatMe" />
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
