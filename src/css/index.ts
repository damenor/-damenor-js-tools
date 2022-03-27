/**
 * Check is user prefers dark mode
 *
 * @returns boolean
 */
const isDarkMode = (): boolean => window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches

export const CSS = {
  isDarkMode
}
