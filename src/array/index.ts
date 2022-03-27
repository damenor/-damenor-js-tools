const flat = (array: []): any[] => array.reduce((a: any, b: any) => (Array.isArray(b) ? [...a, ...flat(b as any)] : [...a, b]), [])

const removeDuplicates = <T>(array: T[]) => [...new Set(array)]

const removeFalsy = <T>(array: T[]) => array.filter(Boolean)

export const ARRAY = {
  flat,
  removeDuplicates,
  removeFalsy,
}
