const pause = (ms: number) => new Promise(resolve => setTimeout(resolve, ms))

export const PROMISE = {
  pause,
}
