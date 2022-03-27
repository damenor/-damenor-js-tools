const allWordsToUpperCase = (str: string) => str.replace(/^(.)|\s+(.)/g, (c) => c.toUpperCase())

const htmlEscape = (str: string) => {
  const obj: any = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;",
  }
  return str.replace(
    /[&<>"']/g,
    (m) => (obj[m] as any)
  )
}

const random = (): string => Math.random().toString(36).slice(2)

const toCamelCase = (str: string) => str.trim().replace(/[-_\s]+(.)?/g, (_, c) => (c ? c.toUpperCase() : ''))

export const STRING = {
  allWordsToUpperCase,
  htmlEscape,
  random,
  toCamelCase,
}
