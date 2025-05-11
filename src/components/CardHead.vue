<template>
  <div class="container">
    <div class="card">
      <div class="head">
        <img
          :src="logo"
          alt="Ukrainian league"
          class="logo"
          height="48px"
          width="48px"
        />
        <div class="textWrap">
          <h1 class="title">Украинская Премьер-Лига</h1>
          <p class="text">Сезон 2019/2020 32-й тур</p>
        </div>
      </div>

      <TabsCard />
    </div>
  </div>
</template>

<script setup lang="ts">
import logo from '@/assets/ukrainian-league.png'
import TabsCard from './TabsCard.vue'
</script>

<style scoped lang="scss">
.card {
  display: flex;
  flex-direction: column;
  gap: 24px;
  border: 1px solid $bg-border;
  border-radius: 2px;
  background-color: $bg-light-03;
  padding-top: 16px;

  @include onDesktop {
    padding-top: 24px;
    padding-inline: 24px;
    gap: 0;

    display: grid;
    align-items: center;
    justify-content: start;
  }
}

.head {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-inline: 16px;

  @include onDesktop {
    display: contents;
  }
}

.logo {
  @include onDesktop {
    width: 80px;
    height: 80px;

    display: block;
    grid-column: 1;
    margin-right: 24px;
  }
}

.textWrap {
  text-wrap: balance;

  .title {
    font-weight: 500;
    font-size: 18px;
    line-height: 1.1;
    margin-bottom: 8px;
    color: $black-09;

    @include onDesktop {
      font-size: 24px;
    }
  }

  .text {
    font-size: 12px;
    color: $black-04;
  }
}
</style>
