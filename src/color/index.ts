/**
 * Get a random hexadecimal color
 *
 * @returns hexadecimal color
 */
const random = () => `#${Math.random().toString(16).slice(2, 8).padEnd(6, '0')}`

/**
 * Convert rgb color to hexadecimal
 * 
 * Example:
 * const colorHex = COLOR.rgbToHex(255, 255, 255) // #ffffff
 *
 * @param r number between 0 and 255
 * @param g number between 0 and 255
 * @param b number between 0 and 255
 * @returns hexadecimal color
 */
const rgbToHex = (r: number, g: number, b: number) => "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)

export const COLOR = {
  random,
  rgbToHex,
}
