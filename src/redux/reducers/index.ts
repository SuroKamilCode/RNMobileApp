import { combineReducers } from "redux";
import currentUser from './currentUser';
import errorReducer from './errorReducer';
import langReducer from './langReducer';

const rootReducer = combineReducers({
    currentUser,
    errorReducer,
    langReducer
})


export default rootReducer;