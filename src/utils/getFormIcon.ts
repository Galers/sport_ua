export const getFormIcon = (form: string): string => {
  switch (form) {
    case 'W':
      return '<i class="fa-solid fa-check"></i>'
    case 'D':
      return '<i class="fa-solid fa-equals"></i>'
    case 'L':
      return '<i class="fa-solid fa-xmark"></i>'
    default:
      return ''
  }
}
