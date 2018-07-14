import axios from 'axios';

import {
         // fetch gluon list
         FETCH_GLUONS, FETCH_GLUONS_FAILURE,
         // adding
         ADD_GLUON, ADD_GLUON_FAILURE,
         REMOVE_ADDED_GLUON,
         // editing
         FETCH_EDITING_GLUON, FETCH_EDITING_GLUON_FAILURE,
         EDIT_GLUON, EDIT_GLUON_FAILURE,
         REMOVE_EDITED_GLUON,
         // deleting
         DELETE_GLUON, DELETE_GLUON_FAILURE,
         REMOVE_DELETED_GLUON, 
} from '../types/gluon';
import { API_HOST, API_KEY } from '../statics';
import LoginUtil from '../utils/login';

const ROOT_URL = 'http://' + API_HOST + '/';
const API_KEY_QUERY = '?key=' + API_KEY;

export const fetchGluons = (quark, qtype_properties, limit = 100) => {
    return dispatch => {
	axios.get(`${ROOT_URL}gluons/list/${quark.id}/${quark.quark_type_id}/${API_KEY_QUERY}&limit=${limit}`)
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

export const addGluon = (quark_id, form) => {
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
	axios.post(`${ROOT_URL}gluons/add/${quark_id}${API_KEY_QUERY}`, params, {
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

export const removeAddedGluon = () => {
    return {
	type: REMOVE_ADDED_GLUON,
	payload: null
    };
}

export const fetchEditingGluon = (gluon_id) => {
    const login_util = new LoginUtil();
    return dispatch => {
	let logged_in_user = JSON.parse(localStorage.getItem('logged_in_user'));
	if (!login_util.isLoggedIn(logged_in_user)) {
	    return {
		type: ADD_GLUON_FAILURE,
		payload: false
	    };
	}
	axios.get(`${ROOT_URL}gluons/one/${gluon_id}${API_KEY_QUERY}`, {
	    headers: {'Content-Type': 'application/x-www-form-urlencoded'},
	    auth: {
		username: logged_in_user.username,
		password: logged_in_user.api_key_plain
	    }
	})
	    .then((response) => {
		dispatch({
		    type: FETCH_EDITING_GLUON,
		    payload: response.data
		});
	    }).catch((response) => dispatch({
		type: FETCH_EDITING_GLUON_FAILURE,
		error: response.error
	    }))
    }

}

export const editGluon = (form) => {
    const login_util = new LoginUtil();
    return dispatch => {
	let logged_in_user = JSON.parse(localStorage.getItem('logged_in_user'));
	if (!login_util.isLoggedIn(logged_in_user) || !form.id ) {
	    return {
		type: EDIT_GLUON_FAILURE,
		payload: false
	    };
	}

	let params = new URLSearchParams(form);
	axios.post(`${ROOT_URL}gluons/edit/${form.id}${API_KEY_QUERY}`, params, {
	    headers: {'Content-Type': 'application/x-www-form-urlencoded'},
	    auth: {
		username: logged_in_user.username,
		password: logged_in_user.api_key_plain
	    }
	})
	    .then((response) => {
		dispatch({
		    type: EDIT_GLUON,
		    payload: response.data
		});
	    }).catch((response) => dispatch({
		type: EDIT_GLUON_FAILURE,
		error: response.error
	    }))
    }
}

export const removeEditedGluon = () => {
    return {
	type: REMOVE_EDITED_GLUON,
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

	axios.delete(`${ROOT_URL}gluons/delete/${gluon_id}${API_KEY_QUERY}`,  {
	    auth: {
		username: logged_in_user.username,
		password: logged_in_user.api_key_plain
	    }
	})
	    .then((response) => {
		dispatch({
		    type: DELETE_GLUON,
		    payload: {gluon_id, response: response.data}
		});
	    }).catch((response) => dispatch({
		type: DELETE_GLUON_FAILURE,
		error: response.error
	    }))
    }
}

export const removeDeletedGluon = () => {
    return {
	type: REMOVE_DELETED_GLUON,
	payload: null
    };
}
