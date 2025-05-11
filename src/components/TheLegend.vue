<template>
  <div class="container">
    <div class="legend">
      <div class="legend__section">
        <h3 class="legend__title">Квалификация</h3>
        <ul class="legend__list">
          <li
            v-for="(item, index) in qualification"
            :key="index"
            class="legend__item"
          >
            <span class="legend__dot" :class="item.colorClass"></span>
            <span class="legend__text">{{ item.text }}</span>
          </li>
        </ul>
      </div>

      <div class="legend__section">
        <h3 class="legend__title">Сокращения</h3>
        <dl class="legend__dl">
          <template v-for="(abbr, index) in abbreviationsToRender" :key="index">
            <dt class="legend__dt">{{ abbr.abbr }}</dt>
            <dd class="legend__dd">{{ abbr.description }}</dd>
          </template>
        </dl>
      </div>

      <div class="legend__section legend__section--form">
        <h3 class="legend__title">Формы</h3>
        <ul class="legend__list">
          <li v-for="(form, index) in forms" :key="index" class="legend__item">
            <span
              class="legend__square"
              :class="form.colorClass"
              v-html="form.icon"
            ></span>
            <span class="legend__text">{{ form.text }}</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {
  defaultQualification,
  defaultAbbreviations,
  defaultForms,
  type QualificationItem,
  type AbbreviationItem,
  type FormsItem,
} from '@/data/legend'
import { computed, onMounted, onUnmounted, ref } from 'vue'
type Abbr = AbbreviationItem

const props = defineProps<{
  qualification?: QualificationItem[]
  abbreviations?: AbbreviationItem[]
  forms?: FormsItem[]
}>()
const qualification = props.qualification ?? defaultQualification
const abbreviations = props.abbreviations ?? defaultAbbreviations

const isDesktop = ref(false)
function checkIsDesktop() {
  isDesktop.value = window.innerWidth >= 1024
}
onMounted(() => {
  checkIsDesktop()
  window.addEventListener('resize', checkIsDesktop)
})
onUnmounted(() => {
  window.removeEventListener('resize', checkIsDesktop)
})

const abbreviationsToRender = computed<Abbr[]>(() => {
  if (!isDesktop.value) return abbreviations
  return abbreviations.filter((a) => ['В', 'Н', 'П', 'З-П'].includes(a.abbr))
})

const forms = props.forms ?? defaultForms
</script>

<style scoped lang="scss">
.legend {
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-bottom: 32px;

  @include onDesktop {
    flex-direction: row;
    margin-bottom: 42px;
    gap: 40px;
  }

  .legend__square {
    height: 20px;
    width: 20px;
    border-radius: 2px;
    color: $white;
    text-align: center;

    &.yellow {
      background-color: $yellow-dark;
    }

    &.red {
      background-color: $red;
    }
    &.green {
      background-color: $bg-green;
    }
  }

  .legend__section {
    display: flex;
    flex-direction: column;
  }

  .legend__section--form {
    display: none;

    @include onDesktop {
      display: flex;
    }
  }

  .legend__title {
    font-weight: 500;
    font-size: 12px;
    line-height: 1.6;
    margin-bottom: 4px;
    color: $black-08;

    @include onDesktop {
      margin-bottom: 4px;
    }
  }

  .legend__list {
    @include onDesktop {
      display: flex;
      flex-direction: column;
      gap: 1px;
    }

    .legend__item {
      display: flex;
      align-items: center;
      gap: 8px;
      height: 20px;

      .legend__dot {
        width: 6px;
        height: 6px;
        border-radius: 50%;
        display: inline-block;

        &.blue {
          background-color: $blue-100;
        }
        &.blue-light {
          background-color: $blue-200;
          opacity: 0.6;
        }
        &.yellow {
          background-color: $yellow-dark;
        }
        &.orange {
          background-color: $orange;
        }
        &.red {
          background-color: $red;
        }
        &.green {
          background-color: $bg-green;
        }
      }

      .legend__text {
        font-size: 12px;
        line-height: 1.3;
      }
    }
  }

  .legend__dl {
    display: grid;
    grid-template-columns: auto 1fr auto 1fr;
    column-gap: 8px;
    max-width: 385px;
    font-size: 12px;
    line-height: 1.3;
    color: $black-08;

    @include onDesktop {
      grid-template-columns: auto 1fr;
      line-height: 1.6;
    }

    .legend__dt {
      font-weight: 500;
      height: 20px;

      @include onDesktop {
        font-weight: 400;
      }
    }

    .legend__dd {
      height: 20px;
    }
  }
}
</style>
