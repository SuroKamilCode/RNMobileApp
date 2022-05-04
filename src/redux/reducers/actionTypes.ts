
interface setUserAction {
    type: "SET_USER",
    payload: any,
    isLoggedIn: boolean
}

interface logOutAction {
    type: "LOGOUT",
    payload: {},
    isLoggedIn: boolean
}

interface logInError {
    type: "LOG_IN_ERROR"
    payload: {}
}

export type Action = setUserAction | logOutAction | logInError