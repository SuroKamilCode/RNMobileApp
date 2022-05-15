import { Action } from './actionTypes';

const initialState = {};

const langReducer = (state: {} = initialState, action: Action) => {
    switch (action.type) {
        case "LANG":
            return {
                ...state,
                lang: action.payload
            }
        default:
            return state;
    }
};

export default langReducer;