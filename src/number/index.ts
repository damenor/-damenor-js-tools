/**
 * Calculate average of numbers
 * 
 * Example:
 * const day = NUMBER.average(1, 2, 3, 4, 5, ...) // 3
 * 
 * @param args Numbers of calculate (1, 2, ...)
 * @returns number average
 */
const average = (...args: number[]) => args.reduce((a, b) => a + b) / args.length

/**
 * Calculate is even
 * 
 * @param num number
 * @returns boolean
 */
const isEven = (num: number) => num % 2 === 0

/**
 * Calculate random number by min and max
 * 
 * Example:
 * const numberBetween1and100 = NUMBER.randomMinMax(1, 100) 
 * 
 * @param min minimum number
 * @param max maximum number
 * @returns random number
 */
const randomMinMax = (min: number, max: number) => Math.floor(Math.random() * (max - min + 1) + min)

/**
 * Round a decimal to the indicated amount
 * 
 * Example:
 * const numberRounded = NUMBER.roundDecimal(1.0135, 2) // 1.01 
 * const numberRounded = NUMBER.roundDecimal(1.0185, 2) // 1.02
 * 
 * @param num number with decimals
 * @param maxDecimal number of decimal
 * @returns random number
 */
const roundDecimal = (num: number, maxDecimal: number) => Number(Math.round(num + "e" as any + maxDecimal) + "e-" + maxDecimal)

export const NUMBER = {
  average,
  isEven,
  randomMinMax,
  roundDecimal,
}
