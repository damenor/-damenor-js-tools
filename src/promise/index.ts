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

/**
 * Wrapper for a promise including a try catch
 * by default it shows error by console
 * 
 * Example:
 * const promise = fetch(...)
 * PROMISE.tryCatchWrapper(promise).then(...)
 * 
 * @param promise pause time in milliseconds
 * @param onError optional ()
 * @returns Promise
 */
 const tryCatchWrapper = async (promise: Promise<any>, onError?: (error: any) =>  void) => {
  try {
    return await promise
  } catch (error) {
    if(onError) return onError(error)  
    console.error({ error })
  }
}

export const PROMISE = {
  tryCatchWrapper,
  pause,
}
