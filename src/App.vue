<script setup lang="ts">
import TheHeader from './components/TheHeader.vue'
import CardHead from './components/CardHead.vue'
import TournamentPage from './components/TournamentPage.vue'
import SidebarComponent from './components/SidebarComponent.vue'
import NavigationSection from './components/NavigationSection.vue'
</script>

<template>
  <TheHeader />
  <NavigationSection />
  <div class="layout-container">
    <main class="layout-main">
      <CardHead />
      <TournamentPage />
    </main>
    <aside class="layout-sidebar">
      <div class="container">
        <SidebarComponent />
      </div>
    </aside>
  </div>
  <footer></footer>
</template>

<style scoped lang="scss">
.layout-container {
  display: flex;
  flex-direction: column;
}

@include onDesktop {
  .layout-container {
    flex-direction: row;
    align-items: flex-start;
  }

  .layout-main {
    flex: 1;
  }

  .layout-sidebar {
    width: 320px;

    .container {
      @include onDesktop {
        padding-inline: 0 20px;
      }
    }
  }
}
</style>
