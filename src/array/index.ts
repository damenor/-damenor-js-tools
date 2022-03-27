/**
 * Convert array in simple array
 * Example:
 * const arrayFlated = ARRAY.flat([0, [1, 2, 3]]) // [0, 1, 2, 3]
 *
 * @param array []
 * @returns the array without false values
 */
const flat = (array: []): any[] => array.reduce((a: any, b: any) => (Array.isArray(b) ? [...a, ...flat(b as any)] : [...a, b]), [])

/**
 * Remove duplicates values in arrays
 * 
 * @param array []
 * @returns the array without duplicates
 */
const removeDuplicates = <T>(array: T[]) => [...new Set(array)]

/**
 * Remove false values in arrays (include 0)
 * 
 * Example:
 * ARRAY.removeFalsy([0, 'a string', '', NaN, true, 5, undefined, false]) // ['a string', true, 5]
 *
 * @param array []
 * @returns the array without false values
 */
const removeFalsy = <T>(array: T[]) => array.filter(Boolean)

export const ARRAY = {
  flat,
  removeDuplicates,
  removeFalsy,
}
