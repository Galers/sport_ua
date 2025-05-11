<template>
  <article class="main-news" aria-label="Main-news">
    <h2 class="main-news__title">Главные новости</h2>
    <ul class="main-news__list">
      <li v-for="(item, index) in news" :key="index" class="main-news__item">
        <a href="/">
          <span class="main-news__arrow">
            <i class="fa-solid fa-arrow-right"></i>
          </span>
          <span class="main-news__text">{{ item }}</span>
        </a>
      </li>
    </ul>
  </article>
</template>

<script setup lang="ts">
const props = defineProps<{ news: string[] }>()
const news = props.news
</script>

<style scoped lang="scss">
.main-news {
  margin-bottom: 40px;
}

.main-news__title {
  font-weight: 700;
  font-size: 18px;
  margin-bottom: 16px;
  color: $black-09;
}

.main-news__list {
  font-weight: 500;
  font-size: 16px;
  line-height: 1.3;
  color: $black-08;
}

.main-news__item {
  display: flex;
  gap: 12px;
  padding-block: 16px;
  border-bottom: 1px solid $bg-border;

  &:hover {
    text-decoration: underline;
  }

  &:first-child {
    border-top: 1px solid $bg-border;
  }
}

.main-news__arrow {
  color: $black-04;

  .fa-solid {
    width: 16px;
    height: 16px;
  }
}
</style>
