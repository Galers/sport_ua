export interface QualificationItem {
  colorClass: string
  text: string
}

export interface AbbreviationItem {
  abbr: string
  description: string
}

export interface FormsItem {
  colorClass: string
  icon: string
  text: string
}

export const defaultQualification: QualificationItem[] = [
  { colorClass: 'blue', text: 'Лига чемпионов УЕФА' },
  { colorClass: 'blue-light', text: 'Лига чемпионов УЕФА' },
  { colorClass: 'yellow', text: 'Лига Европы УЕФА' },
  { colorClass: 'orange', text: 'Понижение' },
]

export const defaultAbbreviations: AbbreviationItem[] = [
  { abbr: 'О', description: 'Очки' },
  { abbr: 'В', description: 'Выигрыш' },
  { abbr: 'И', description: 'Игры' },
  { abbr: 'Н', description: 'Ничья' },
  { abbr: 'З-П', description: 'Забитые - пропущенные' },
  { abbr: 'П', description: 'Поражение' },
]

export const defaultForms: FormsItem[] = [
  {
    colorClass: 'green',
    text: 'Выигрыш',
    icon: '<i class="fa-solid fa-check"></i>',
  },
  {
    colorClass: 'red',
    text: 'Поражение',
    icon: '<i class="fa-solid fa-equals"></i>',
  },
  {
    colorClass: 'yellow',
    text: 'Ничья',
    icon: '<i class="fa-solid fa-xmark"></i>',
  },
]
