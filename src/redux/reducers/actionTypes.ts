
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
    payload: any
}

interface setLangAction {
    type: "LANG",
    payload: string
}

export type Action = setUserAction | logOutAction | logInError | setLangAction