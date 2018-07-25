import { INIT_LOGIN, EXEC_LOGIN, EXEC_LOGOUT } from '../types/login';

const initState = null;
export default (state = initState, action) => {
    switch(action.type) {
    case INIT_LOGIN :
    case EXEC_LOGIN :
	return action.payload;
    case EXEC_LOGOUT :
	return action.payload;
    default :
	return state
    }
}
