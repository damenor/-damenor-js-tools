/**
 * Capitalize all words
 * 
 * Example:
 * const wordsConverted = STRING.allWordsToUpperCase('hello world!') // "Hello World!"
 * 
 * @param str string to convert
 * @returns string converted
 */
const allWordsToUpperCase = (str: string) => str.replace(/^(.)|\s+(.)/g, (c) => c.toUpperCase())

/**
 * Escape html code
 * 
 * Example:
 * const htmlClean = STRING.htmlEscape('<div>hello world</div>')
 * 
 * @param str string to convert
 * @returns string converted
 */
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

/**
 * Get random letters
 * 
 * @returns string created
 */
const random = (): string => Math.random().toString(36).slice(2)

/**
 * convert text string to camelCase
 * 
 * Example:
 * const stringCamelCase = STRING.toCamelCase('background-color') // "backgroundColor"
 * 
 * @param str string to convert
 * @returns string converted
 */
const toCamelCase = (str: string) => str.trim().replace(/[-_\s]+(.)?/g, (_, c) => (c ? c.toUpperCase() : ''))

export const STRING = {
  allWordsToUpperCase,
  htmlEscape,
  random,
  toCamelCase,
}
