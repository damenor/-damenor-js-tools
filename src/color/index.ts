const random = () => `#${Math.random().toString(16).slice(2, 8).padEnd(6, '0')}`

const rgbToHex = (r: number, g: number, b: number) => "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)

export const COLOR = {
  random,
  rgbToHex,
}
