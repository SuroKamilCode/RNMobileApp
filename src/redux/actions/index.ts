import { logInError } from './errors';
import { setLang } from './langAction';
import { logOut, setUser } from './userActions';

const allActions = {
    setUser,
    logOut,
    logInError,
    setLang
}

export default allActions
