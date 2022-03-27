const average = (...args: number[]) => args.reduce((a, b) => a + b) / args.length

const isEven = (num: number) => num % 2 === 0

const randomMinMax = (min: number, max: number) => Math.floor(Math.random() * (max - min + 1) + min)

const roundDecimal = (n: number, d: number) => Number(Math.round(n + "e" as any + d) + "e-" + d)

export const NUMBER = {
  average,
  isEven,
  randomMinMax,
  roundDecimal,
}
