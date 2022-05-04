import { Action } from './actionTypes';

const initialState = {
    user: null,
    isLoggedIn: false
};

const currentUser = (state = initialState, action: Action) => {
    switch (action.type) {
        case "SET_USER":
            return {
                ...state,
                user: action.payload,
                isLoggedIn: action.isLoggedIn
            }
        case "LOGOUT":
            return {
                ...state,
                user: null,
                isLoggedIn: false
            }
        default:
            return state;
    }
}

export default currentUser;