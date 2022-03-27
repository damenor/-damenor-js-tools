const clear = () => document.cookie.split(';').forEach((c) => {
  return (document.cookie = c.replace(/^ +/, '').replace(/=.*/, `=;expires=${new Date().toUTCString()};path=/`))
})

export const COOKIES = {
  clear,
}
