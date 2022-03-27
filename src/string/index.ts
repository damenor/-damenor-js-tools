/**
 * Capitalize all words
 * 
 * Example:
 * const wordsConverted = STRING.toUpperCase('hello world!') // "Hello World!"
 * const wordsConverted = STRING.toUpperCase('hello world!', true) // "Hello world!"
 * 
 * @param str string to convert
 * @param onlyFirst boolean optional for only change first letter
 * @returns string converted
 */
const toUpperCase = (str: string, onlyFirst?: boolean) => {
  if(onlyFirst) return str.charAt(0).toUpperCase() + str.slice(1)
  return str.replace(/^(.)|\s+(.)/g, (c) => c.toUpperCase())
}

/**
 * Lowercase all words
 * 
 * Example:
 * const wordsConverted = STRING.toLowerCase('Hello World!') // "hello world!"
 * const wordsConverted = STRING.toLowerCase('Hello World!', true) // "hello World!"
 * 
 * @param str string to convert
 * @param onlyFirst boolean optional for only change first letter
 * @returns string converted
 */
const toLowerCase = (str: string, onlyFirst?: boolean) => {
  if(onlyFirst) return str.charAt(0).toLowerCase() + str.slice(1)
  return str.replace(/^(.)|\s+(.)/g, (c) => c.toLowerCase())
}

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

/**
 * replace all text in string
 * 
 * Example:
 * const textReplaced = STRING.replaceall(text, textToReplace, textReplace) 
 * 
 * @param str string complete
 * @param search string to search for replace
 * @param replace new string
 * @returns string converted
 */
const replaceAll = (str: string, search: string, replace: string) => str.split(search).join(replace)

export const STRING = {
  toUpperCase,
  toLowerCase,
  htmlEscape,
  random,
  replaceAll,
  toCamelCase,
}


