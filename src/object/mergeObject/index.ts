const mergeArrays = (target: any[], source: any[]) => {
  source.forEach((value, index) => {
    target[index] = mergeValues(target[index], value)
  })
  return target
}

const mergeObject = (
  target: { [key: string]: any },
  source: { [key: string]: any }
) => {
  Object.keys(source).forEach((key) => {
    const sourceValue = source[key]
    const targetValue = target[key]
    target[key] = mergeValues(targetValue, sourceValue)
  })
  return target
}

const mergeValues = (target: any, source: any) => {
  if (typeof target === 'object' && typeof source === 'object') {
    return mergeObject(target, source)
  }
  if (Array.isArray(target) && Array.isArray(source)) {
    return mergeArrays(target, source)
  }
  if (source === undefined) {
    return target
  }
  return source
}

/**
 * Copies one object with another without losing properties
 * 
 * Example:
 * const objectMerged = mergeObjects({hello: 'World'}, {object: 'toCopy}) // { hello: 'World', object: 'toCopy }
 * 
 * @param target object to merge
 * @param sources new Values for object
 * @returns Object
 */
export const mergeObjects = (target: object, ...sources: object[]) => {
  sources.forEach((source) => mergeValues(target, source))
  return target
}
