<template>
  <div :class="{ container: isTablet }">
    <div class="tables-wrapper">
      <TableGroup
        v-for="group in Object.keys(tables)"
        :key="group"
        :class="{ hidden: group !== currentGroup }"
        :teams="tables[group] || []"
        :group-name="group"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import type { Team } from '@/data/teams'
import TableGroup from './TableGroup.vue'

defineProps<{
  tables: Record<string, Team[]>
  currentGroup: string
}>()

const isTablet = ref(false)
function checkIsTablet() {
  isTablet.value = window.innerWidth >= 768
}

onMounted(() => {
  checkIsTablet()
  window.addEventListener('resize', checkIsTablet)
})

onUnmounted(() => {
  window.removeEventListener('resize', checkIsTablet)
})
</script>

<style scoped lang="scss">
.tables-wrapper {
  display: flex;
  flex-direction: column;
  gap: 8px;

  @include onTablet {
    gap: 12px;
  }
}

.hidden {
  position: absolute;
  overflow: hidden;
  white-space: nowrap;
  margin: 0;
  padding: 0;
  height: 1px;
  width: 1px;
  clip: rect(0 0 0 0);
  clip-path: inset(100%);
}
</style>
