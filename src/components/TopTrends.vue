<template>
  <article class="trends" aria-label="Trends">
    <h2 class="trends__title">Тренды</h2>
    <div class="trends__list">
      <a href="/" v-for="(tag, index) in tags" :key="index" class="trends__tag">
        <i class="fa-solid fa-bolt"></i> {{ tag }}
      </a>
    </div>
  </article>
</template>

<script setup lang="ts">
const props = defineProps<{ tags: string[] }>()
const tags = props.tags
</script>

<style scoped lang="scss">
.trends {
  margin-bottom: 40px;
}

.trends__title {
  font-size: 18px;
  font-weight: 700;
  color: $black-09;
  margin-bottom: 16px;
}

.trends__list {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.trends__tag {
  display: inline-block;
  background: $bg-dark-light;
  color: $black-07;
  padding: 6px 12px;
  border-radius: 16px;

  &:hover {
    text-decoration: underline;
  }

  .fa-solid {
    color: $yellow-dark;
  }
}
</style>
