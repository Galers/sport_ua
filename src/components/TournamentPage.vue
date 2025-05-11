<template>
  <section aria-label="Tournament page">
    <div class="container">
      <div class="head-content">
        <h2>Турнірна таблиця</h2>
        <FiltersButtons v-model="selectedFilter" />
      </div>
    </div>

    <div class="main-content">
      <LoaderComponent v-if="isLoading" />
      <TableWrapper v-else :tables="tables" :current-group="currentGroup" />
      <TheLegend />
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import FiltersButtons from './FiltersButtons.vue'
import TheLegend from './TheLegend.vue'
import TableWrapper from './TableWrapper.vue'
import LoaderComponent from './LoaderComponent.vue'
import { type Team } from '@/data/teams'

const selectedFilter = ref<'general' | 'home' | 'away'>('general')
const tables = ref<Record<string, Team[]>>({})
const isLoading = ref(false)

const groups = ['A', 'B', 'C']
const filterToGroup: Record<string, string> = {
  general: 'A',
  home: 'B',
  away: 'C',
}

const currentGroup = computed(() => filterToGroup[selectedFilter.value])

async function fetchTeams() {
  isLoading.value = true
  try {
    const res = await fetch('https://63ee0ec0388920150dd83e3c.mockapi.io/teams')
    const data: Team[] = await res.json()
    const grouped: Record<string, Team[]> = { A: [], B: [], C: [] }
    data.forEach((team) => grouped[team.group]?.push(team))
    groups.forEach((g) => grouped[g].sort((a, b) => b.points - a.points))
    tables.value = grouped
  } catch (err) {
    console.error('Помилка при завантаженні команд:', err)
  } finally {
    isLoading.value = false
  }
}

onMounted(fetchTeams)
</script>

<style scoped lang="scss">
.head-content {
  display: flex;
  flex-direction: column;
  row-gap: 9px;
  margin-block: 32px 16px;
  font-weight: 700;
  font-size: 18px;
  line-height: 1.3;

  @include onDesktop {
    flex-direction: row;
    justify-content: space-between;
  }
}

.main-content {
  display: flex;
  flex-direction: column;
  gap: 18px;

  @include onDesktop {
    gap: 26px;
  }
}
</style>
