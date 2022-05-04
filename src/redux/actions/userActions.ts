
export const setUser = (user: string, isLoggedIn: boolean) => {
    return {
        type: "SET_USER",
        payload: user,
        isLoggedIn: isLoggedIn
    }
}

export const logOut = () => {
    return {
        type: "LOGOUT",
        payload: null,
        isLoggedIn: false
    }
}



