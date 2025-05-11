<template>
  <nav class="navigation">
    <FootballNavigation />
    <TheBreadcrumb />
  </nav>
</template>

<script setup lang="ts">
import FootballNavigation from './FootballNavigation.vue'
import TheBreadcrumb from './TheBreadcrumb.vue'
</script>

<style scoped lang="scss">
.navigation {
  @include onTablet {
    margin-bottom: 24px;
    border-bottom: 1px solid $bg-border;
  }
}
</style>
