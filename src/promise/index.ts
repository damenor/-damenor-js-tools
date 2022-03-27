/**
 * Create a uses asynchronous pause
 * 
 * Example:
 * PROMISE.pause(1000).then(...)
 * await PROMISE.pause(1000)
 * 
 * @param ms pause time in milliseconds
 * @returns Promise
 */
const pause = (ms: number) => new Promise(resolve => setTimeout(resolve, ms))

export const PROMISE = {
  pause,
}
