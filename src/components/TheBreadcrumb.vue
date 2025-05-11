<template>
  <div class="breadcrumb" aria-label="breadcrumb">
    <ul class="breadcrumbList">
      <li class="breadcrumbItem">
        <a href="/" class="main">Главная</a>
        <i class="fa-solid fa-chevron-right fa-sm"></i>
      </li>
      <li class="breadcrumbItem active" aria-current="page">Футбол</li>
    </ul>
  </div>
</template>

<style scoped lang="scss">
.breadcrumb {
  padding-block: 16px;
  padding-inline: 12px;

  @include onDesktop {
    padding-inline: 20px;
  }
}

.breadcrumbList {
  display: flex;
  gap: 12px;
}

.breadcrumbItem {
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 12px;
  color: $black-07;

  &.active {
    color: $black-04;
  }
}

.fa-chevron-right {
  color: $black-04;
}

.main {
  text-decoration: none;
}

.breadcrumbItem a:hover {
  text-decoration: underline;
}
</style>
