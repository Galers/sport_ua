<template>
  <table class="group-table__table">
    <thead>
      <tr class="table-head__row">
        <th v-for="col in columns" :key="col.key" :class="col.key">
          <template v-if="col.mobile || col.desktop">
            <span class="label--mobile">{{ col.mobile }}</span>
            <span class="label--desktop">{{ col.desktop }}</span>
          </template>
          <template v-else>
            {{ col.label }}
          </template>
        </th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(team, idx) in teams" :key="team.id" class="table-body__row">
        <td class="group-table__position">
          <span class="group-table__rectangle" :class="`place-${idx + 1}`">
            {{ idx + 1 }}
            <span class="tooltip">Ліга чемпіонів</span>
          </span>
        </td>

        <td class="group-table__team">
          <img :src="team.logo" :alt="`${team.name} logo`" class="team-logo" />
          <span class="team-name">{{ team.name }}</span>
        </td>

        <td class="group-table__played">{{ team.games }}</td>
        <td class="group-table__won">{{ team.wins }}</td>
        <td class="group-table__drawn">{{ team.draws }}</td>
        <td class="group-table__lost">{{ team.loses }}</td>
        <td class="group-table__goals">
          {{ team.scored }} - {{ team.conceded }}
        </td>
        <td class="group-table__form">
          <span v-for="(f, i) in team.form" :key="i" v-html="getFormIcon(f)" />
        </td>
        <td>
          <strong class="group-table__points">{{ team.points }}</strong>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { type Team } from '@/data/teams'
import { getFormIcon } from '@/utils/getFormIcon'

const props = defineProps<{
  teams: Team[]
  groupName: string
}>()

const columns = computed(() => [
  { key: 'group', label: `ГРУПА ${props.groupName}` },
  { key: 'games', mobile: 'И', desktop: 'Ігри' },
  { key: 'wins', label: 'В' },
  { key: 'draws', label: 'Н' },
  { key: 'loses', label: 'П' },
  { key: 'goals', label: 'З - П' },
  { key: 'forms', label: 'Форма' },
  { key: 'points', mobile: 'О', desktop: 'Очки' },
])
</script>

<style scoped lang="scss">
.wrapper {
  display: flex;
  flex-direction: column;
  gap: 8px;

  @include onTablet {
    gap: 12px;
  }
}

.group-table__table {
  width: 100%;
  box-shadow: $shadow-50;

  tr,
  a {
    display: flex;
    align-items: center;
    text-align: center;
  }

  a {
    gap: 6px;

    &:hover {
      text-decoration: underline;
    }
  }

  th {
    font-weight: 500;
    @include onDesktop {
      font-weight: 400;
    }
  }
}

.table-head__row {
  background-color: $bg-dark;
  padding-inline: 12px;
  padding-block: 4px;
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;

  @include onDesktop {
    padding-inline: 16px;
  }

  th {
    font-size: 12px;
    line-height: 1.6;
    height: 20px;
    width: 24px;
    color: $white;
  }

  .games,
  .loses {
    margin-right: 8px;
  }

  .loses {
    @include onDesktop {
      margin-right: 12px;
    }
  }

  .wins,
  .draws {
    @include onDesktop {
      margin-right: 4px;
    }
  }

  .games,
  .points {
    .label--mobile {
      display: inline;
    }

    .label--desktop {
      display: none;
    }

    @include onDesktop {
      width: 32px;

      .label--mobile {
        display: none;
      }

      .label--desktop {
        display: inline;
      }
    }
  }

  .goals {
    width: 48px;
    margin-right: 8px;

    @include onDesktop {
      width: 52px;
      margin-right: 20px;
    }
  }

  .forms {
    display: none;

    @include onDesktop {
      display: inline;
      width: 94px;
      margin-right: 16px;
    }
  }

  .group {
    width: 56px;
    font-weight: 700;
    margin-right: auto;
    text-align: start;
  }
}

.table-body__row {
  line-height: 1.7;
  padding-block: 8px;
  padding-inline: 8px 12px;

  @include onDesktop {
    padding-block: 6px;
    padding-inline: 12px 20px;
    font-size: 15px;
    line-height: 1.6;
  }

  &:hover {
    background-color: $bg-border;
  }

  td {
    width: 24px;
  }

  .group-table__position {
    margin-right: 6px;

    @include onDesktop {
      margin-right: 8px;
    }
  }

  .group-table__goals {
    width: 48px;
    margin-right: 8px;

    @include onDesktop {
      width: 52px;
      margin-right: 20px;
    }
  }

  .group-table__played,
  .group-table__lost {
    margin-right: 8px;

    @include onDesktop {
      margin-right: 12px;
    }
  }
  .group-table__won,
  .group-table__drawn {
    @include onDesktop {
      margin-right: 4px;
    }
  }

  .group-table__team {
    display: flex;
    align-items: center;
    gap: 6px;
    margin-right: auto;
    flex: 1 1 auto;
    min-width: 0;
    font-size: 12px;
    line-height: 1.6;

    @include onDesktop {
      gap: 8px;
    }

    .team-name {
      flex: 1 1 auto;
      min-width: 0;
      text-align: start;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    .team-logo {
      width: 24px;
      height: 24px;
    }
  }

  .group-table__form {
    display: none;

    @include onDesktop {
      display: inline-flex;
      width: 94px;
      gap: 1px;
      margin-right: 20px;

      span {
        width: 18px;
        height: 18px;

        &:has(.fa-solid) {
          display: flex;
          justify-content: center;
          align-items: center;
          border-radius: 2px;
          color: $white;
        }

        &:has(.fa-check) {
          background-color: $bg-green;
        }

        &:has(.fa-equals) {
          background-color: $yellow;
        }

        &:has(.fa-xmark) {
          background-color: $red;
        }
      }
    }
  }
}

.group-table__rectangle {
  position: relative;
  display: inline-block;
  width: 20px;
  height: 20px;
  font-size: 14px;
  line-height: 1.4;
  border-radius: 50%;
  text-align: center;
  color: $black-08;
  cursor: pointer;

  &:hover {
    .tooltip {
      display: block;
    }
  }
}

.tooltip {
  display: none;
  position: absolute;
  left: 0px;
  top: 28px;
  width: max-content;
  font-size: 12px;
  line-height: 1.6;
  padding: 4px 8px;
  border-radius: 4px;
  background-color: $bg-dark;
  box-shadow: 0 0 8px 0 rgba(0, 9, 22, 0.2);
  color: $white;
  z-index: 1;

  &::before {
    content: '';
    display: block;
    position: absolute;
    width: 18px;
    height: 12px;
    top: -4px;
    background-color: $bg-dark;
    clip-path: polygon(50% -4%, 100% 100%, 0% 100%);
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
    left: 2px;
  }
}

.place-1,
.place-2 {
  background-color: $blue-100;
  color: $white;

  @include onTablet {
    background-color: $bg-green;
  }
}

.place-3 {
  background-color: $blue-150;
  color: $white;

  @include onTablet {
    background-color: $blue-100;
  }
}
</style>
