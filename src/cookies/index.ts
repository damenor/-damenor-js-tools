/**
 * Clean all cookies
 */
const clear = () => document.cookie.split(';').forEach((c) => {
  (document.cookie = c.replace(/^ +/, '').replace(/=.*/, `=;expires=${new Date().toUTCString()};path=/`))
})

export const COOKIES = {
  clear,
}
