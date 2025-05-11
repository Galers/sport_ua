<template>
  <div class="filters">
    <button
      v-for="filter in filters"
      :key="filter.id"
      :class="['link-button', { active: modelValue === filter.id }]"
      :aria-pressed="modelValue === filter.id"
      @click="$emit('update:modelValue', filter.id)"
    >
      {{ filter.name }}
    </button>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  modelValue: string
}>()

const filters = [
  { id: 'general', name: 'Загальна' },
  { id: 'home', name: 'Домашня' },
  { id: 'away', name: 'Виїзна' },
]
</script>

<style scoped lang="scss">
.filters {
  display: flex;
  column-gap: 6px;
}

.link-button {
  font-size: 14px;
  line-height: 1.7;
  padding: 4px 12px;
  border-radius: 6px;
  color: $black-05;
  background-color: $bg-gray;
  transition: all 0.2s;

  &.active {
    font-weight: 700;
    color: $black-09;
    background-color: $yellow-light;
  }

  &:hover:not(.active) {
    background-color: $blue-00;
  }
}
</style>
