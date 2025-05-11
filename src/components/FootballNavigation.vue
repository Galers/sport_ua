<template>
  <div className="football-navigation">
    <div className="container">
      <ul className="football-nav">
        <li>
          <img src="../assets/ball.svg" alt="" />
          <a href="#" className="football active">ФУТБОЛ</a>
        </li>
        <li>
          <div className="border"></div>
        </li>
        <li>
          <a href="#" className="medals">Зачет медалей</a>
        </li>
        <li><a href="#" className="rating">Рейтинги</a></li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss">
.football-navigation {
  display: none;

  @include onTablet {
    display: block;
    padding-block: 14px 16px;
    border-bottom: 1px solid $bg-border;
  }
}

.football-nav {
  display: flex;
  align-items: center;
  padding-block: 14px 16px;
  color: $black-07;

  .football {
    padding-left: 8px;
    margin-right: 16px;
  }

  .border {
    border-right: 2px solid $bg-border;
    height: 12px;
  }

  .medals {
    margin-inline: 16px 24px;
  }

  .active {
    color: $black-09;
  }

  a {
    &:hover {
      text-decoration: underline;
    }
  }
}
</style>
