const daysDiff = (date: Date, otherDate: Date) => Math.ceil(Math.abs((date as any) - (otherDate as any)) / (1000 * 60 * 60 * 24))

const dayOfYear = (date: Date) => Math.floor(((date as any) - (new Date(date.getFullYear(), 0, 0) as any)) / (1000 * 60 * 60 * 24))

export const DATE = {
  daysDiff,
  dayOfYear,
}
