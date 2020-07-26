export const isBrowser = () => typeof window !== "undefined"

export const getUser = () =>
  isBrowser() && window.localStorage.getItem("currUser")
    ? JSON.parse(window.localStorage.getItem("currUser"))
    : {}

const setUser = user =>
  window.localStorage.setItem("currUser", JSON.stringify(user))


//this method will use whatever authentication mechanism the application is using (NodeJs/Passport, Firebase, Auth0, AWS etc)
export const handleLogin = ({ username, password }) => {

  if (username === `admin` && password === `pass`) {
    return setUser({
      username: `admin`,
      name: `Admin`,
      email: `admin@example.org`,
    })
  }

  return false
}

export const isLoggedIn = () => {
  const user = getUser()

  return !!user.username
}

export const logout = callback => {
  setUser({})
  callback()
}