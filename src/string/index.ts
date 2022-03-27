const allWordsToUpperCase = (str: string) => str.replace(/^(.)|\s+(.)/g, (c) => c.toUpperCase())

const htmlEscape = (str: string) =>
  str.replace(
    /[&<>"']/g,
    (m) =>
      ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;",
      }[m] as any)
  );

const random = (): string => Math.random().toString(36).slice(2)

const toCamelCase = (str: string) => str.trim().replace(/[-_\s]+(.)?/g, (_, c) => (c ? c.toUpperCase() : ''))

export const STRING = {
  allWordsToUpperCase,
  htmlEscape,
  random,
  toCamelCase,
}
