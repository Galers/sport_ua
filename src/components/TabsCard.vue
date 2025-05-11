<template>
  <div class="tabs">
    <ul class="list">
      <li class="item">
        <a href="/" class="link">Главная</a>
      </li>
      <li class="item">
        <a href="/" class="link active">Таблица</a>
      </li>
      <li class="item">
        <a href="/" class="link">Календарь</a>
      </li>
      <li class="item">
        <a href="/" class="link">Бомбардиры</a>
      </li>
      <li class="item">
        <a href="/" class="link desktop">Зрители</a>
      </li>
      <li class="item">
        <a href="/" class="link desktop">Трансферы</a>
      </li>
    </ul>
  </div>
</template>

<style scoped lang="scss">
.tabs {
  border-top: 1px solid $bg-border;
  @include onDesktop {
    border-top: none;
    grid-column: 2;
  }
}

.list {
  display: flex;
  gap: 12px;
  padding-inline: 16px;
  justify-content: flex-start;

  @include onTablet {
    gap: 24px;
    justify-content: center;
  }

  @include onDesktop {
    justify-content: flex-start;
    padding-inline: 0;
  }
}

.item {
  font-size: 12px;
  color: $black-05;

  .link {
    display: block;
    position: relative;
    padding-block: 11px;
    @include transition(color);

    &::before {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 0;
      height: 2px;
      background-color: $yellow-dark;
      @include transition(width);
    }

    &:hover {
      color: $black-07;

      &::before {
        width: 100%;
      }
    }

    &.active {
      &::before {
        width: 100%;
      }
    }

    &.desktop {
      display: none;

      @include onTablet {
        display: block;
      }
    }
  }
}

.active {
  font-weight: 500;
  color: $black-07;
}
</style>
