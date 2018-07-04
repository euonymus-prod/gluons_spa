import axios from 'axios';

import { ADD_GLUON, ADD_GLUON_FAILURE, REMOVE_ADDED_GLUON, FETCH_GLUONS, FETCH_GLUONS_FAILURE, DELETE_GLUON, DELETE_GLUON_FAILURE,
	 } from '../types/gluon';
import { API_HOST } from '../statics';
import LoginUtil from '../utils/login';

const ROOT_URL = 'http://' + API_HOST + '/';
const API_KEY = '?key=euonymus';

export const fetchGluons = (quark, qtype_properties, limit = 100) => {
    return dispatch => {
	axios.get(`${ROOT_URL}gluons/list/${quark.id}/${quark.quark_type_id}/${API_KEY}&limit=${limit}`)
	    .then((response) => {
		dispatch({
		    type: FETCH_GLUONS,
		    payload: {qtype_properties, quark, response: response.data}
		});
	    }).catch((response) => dispatch({
		type: FETCH_GLUONS_FAILURE,
		error: response.error
	    }))
    }
}


export const addGluon = (form) => {
    const login_util = new LoginUtil();
    return dispatch => {
	let logged_in_user = JSON.parse(localStorage.getItem('logged_in_user'));
	if (!login_util.isLoggedIn(logged_in_user)) {
	    return {
		type: ADD_GLUON_FAILURE,
		payload: false
	    };
	}

	let params = new URLSearchParams(form);
	axios.post(`${ROOT_URL}gluons/add${API_KEY}`, params, {
	    headers: {'Content-Type': 'application/x-www-form-urlencoded'},
	    auth: {
		username: logged_in_user.username,
		password: logged_in_user.api_key_plain
	    }
	})
	    .then((response) => {
		dispatch({
		    type: ADD_GLUON,
		    payload: response.data
		});
	    }).catch((response) => dispatch({
		type: ADD_GLUON_FAILURE,
		error: response.error
	    }))
    }
}

export const removeAddedGluon = (form) => {
    return {
	type: REMOVE_ADDED_GLUON,
	payload: null
    };
}

export const deleteGluon = (gluon_id) => {
    const login_util = new LoginUtil();
    return dispatch => {
	let logged_in_user = JSON.parse(localStorage.getItem('logged_in_user'));
	if (!login_util.isLoggedIn(logged_in_user)) {
	    return {
		type: DELETE_GLUON_FAILURE,
		payload: false
	    };
	}

	axios.delete(`${ROOT_URL}gluons/delete/${gluon_id}${API_KEY}`,  {
	    auth: {
		username: logged_in_user.username,
		password: logged_in_user.api_key_plain
	    }
	})
	    .then((response) => {
console.log(response)
		dispatch({
		    type: DELETE_GLUON,
		    payload: response.data
		});
	    }).catch((response) => dispatch({
		type: DELETE_GLUON_FAILURE,
		error: response.error
	    }))
    }
}

