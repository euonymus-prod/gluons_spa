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
	// NOTE: I don't know why, but if you return 'state' directly, main_quark's current_quark blinks when you visit it from the toppage.
	// return state
	let logged_in_user = JSON.parse(localStorage.getItem('logged_in_user'));
	return logged_in_user
    }
}
