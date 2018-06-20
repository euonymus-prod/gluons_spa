import { EXEC_LOGIN, EXEC_LOGOUT } from '../types/login';

const initState = null;
export default (state = initState, action) => {
    switch(action.type) {
    case EXEC_LOGIN :
	return action.payload;
    case EXEC_LOGOUT :
	return action.payload;
    default :
	let logged_in_user = JSON.parse(localStorage.getItem('logged_in_user'));
	return logged_in_user
    }
}
