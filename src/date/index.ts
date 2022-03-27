/**
 * Calculate days difference between 2 dates
 * 
 * Example:
 * const startDate = new Date("1986-03-05")
 * const endDate = new Date()
 * const daysDiff = DATE.daysDiff(startDate, endDate)
 * 
 * @param startDate Date
 * @param endDate Date
 * @returns number of days difference
 */
const daysDiff = (startDate: Date, endDate: Date) => Math.ceil(Math.abs((startDate as any) - (endDate as any)) / (1000 * 60 * 60 * 24))

/**
 * Calculate the number of the day of the year
 * 
 * Example:
 * const day = DATE.dayOfYear(new Date())
 * 
 * @param date Date
 * @returns number of day of year
 */
const dayOfYear = (date: Date) => Math.floor(((date as any) - (new Date(date.getFullYear(), 0, 0) as any)) / (1000 * 60 * 60 * 24))

export const DATE = {
  daysDiff,
  dayOfYear,
}

new Date('')