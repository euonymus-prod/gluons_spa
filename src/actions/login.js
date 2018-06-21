import axios  from 'axios';

import { EXEC_LOGIN, EXEC_LOGIN_FAILURE, EXEC_LOGOUT } from '../types/login';
import { API_HOST } from '../statics';

const ROOT_URL = 'http://' + API_HOST + '/';
const API_KEY = '?key=euonymus';

export const execLogin = (username, password) => {
    return dispatch => {
	let params = new URLSearchParams();
	params.append('username', username);
	params.append('password', password);

	axios.post(`${ROOT_URL}users/login${API_KEY}`, params, {
	    headers: {'Content-Type': 'application/x-www-form-urlencoded'}
	})
	    .then((response) => {
		localStorage.setItem('logged_in_user', JSON.stringify(response.data));
		dispatch({
		    type: EXEC_LOGIN,
		    payload: response.data
		});
	    }).catch((response) => dispatch({
		type: EXEC_LOGIN_FAILURE,
		error: response.error
	    }))
    }
}

export const execLogout = () => {
    localStorage.setItem('logged_in_user', null);
    localStorage.setItem('qtype_properties', null);
    return {
	type: EXEC_LOGOUT,
	payload: null
    };
}
