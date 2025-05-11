<script setup lang="ts">
import logo from '@/assets/logo.svg'
</script>

<template>
  <header class="header">
    <nav class="nav">
      <div class="wrapper">
        <button class="button burger" aria-label="Menu">
          <span class="line"></span>
          <span class="line"></span>
          <span class="line"></span>
        </button>

        <a href="/" aria-label="On main page">
          <img :src="logo" alt="SPORT UA" />
        </a>
      </div>

      <ul class="nav-list" aria-label="Main navigation">
        <li class="item mobile">
          <div class="button matchContainer" aria-label="On main page">
            <label class="label" for="match">
              <input
                type="radio"
                class="radio"
                name="tab"
                value="match"
                checked
              />
              Матчи
            </label>
          </div>
        </li>

        <li class="item">
          <button type="button" class="button" aria-label="Favorites">
            <i class="fa-regular fa-star" aria-hidden="true"></i>
          </button>
        </li>

        <li class="item">
          <button type="button" class="button" aria-label="Notifications">
            <i class="fa-regular fa-bell" aria-hidden="true"></i>
          </button>
        </li>

        <li class="item desktop">
          <button type="button" class="button" aria-label="Search">
            <i class="fa-solid fa-magnifying-glass" aria-hidden="true"></i>
          </button>
        </li>

        <li class="item desktop">
          <button type="button" class="button" aria-label="Account">
            <span class="auth">D</span>
          </button>
        </li>
      </ul>
    </nav>
  </header>
</template>

<style scoped lang="scss">
.header {
  padding: 6px;
  background-color: $black;

  @include onDesktop {
    height: 56px;
  }

  .nav {
    display: flex;
    justify-content: space-between;

    .wrapper {
      display: flex;
      align-items: center;
      gap: 8px;
    }

    .button {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 40px;
      height: 40px;
      border-radius: 4px;
      color: $white;
      @include transition(background-color);

      &:hover {
        background-color: $bg-hover;
      }

      &.matchContainer {
        width: 87px;
        position: relative;

        .label {
          display: flex;
          gap: 4px;

          .radio {
            appearance: none;
            position: relative;
            width: 18px;
            height: 18px;
            outline: 2px solid $bg-light-03;
            border-radius: 50%;
            accent-color: $white;

            &::before,
            &::after {
              content: '';
              position: absolute;
              height: 10px;
              width: 10px;
              border-radius: 50%;
              inset: 0;
              margin: auto;
              opacity: 0;
              @include transition(opacity 0.2s);
            }

            &:checked::after {
              background-color: $white;
              opacity: 1;
            }
          }
        }

        &:hover .radio::before {
          background-color: $bg-light;
          opacity: 1;
        }
      }

      .auth {
        font-size: 16px;
        font-weight: 500;
        line-height: 1.25;
        border-radius: 50%;
        background-color: $green-dark;
        width: 28px;
        height: 28px;
        text-align: center;
        align-content: center;
      }
    }

    .burger {
      .line {
        width: 24px;
        height: 2px;
        background-color: $white;
        margin-bottom: 5px;

        &:last-child {
          margin-bottom: 0;
        }
      }
    }

    .nav-list {
      display: flex;

      .item {
        &.mobile {
          @include onDesktop {
            display: none;
          }
        }

        &.desktop {
          display: none;
          @include onDesktop {
            display: block;
          }
        }
      }
    }
  }
}
</style>
