import axios from 'axios';

import { ADD_QUARK, ADD_QUARK_FAILURE, REMOVE_ADDED_QUARK, REMOVE_DELETED_QUARK,
	 FETCH_EDITING_QUARK, FETCH_EDITING_QUARK_FAILURE, READ_EDITING_QUARK, READ_EDITING_QUARK_FAILURE,
	 EDIT_QUARK, EDIT_QUARK_FAILURE,
	 FETCH_QUARKS, FETCH_QUARKS_FAILURE, SEARCH_QUARKS, SEARCH_QUARKS_FAILURE, FETCH_PICKUPS, FETCH_PICKUPS_FAILURE,
	 CHANGE_SEARCH_KEYWORD, CHANGE_SEARCH_KEYWORD_FAILURE, DELETE_QUARK, DELETE_QUARK_FAILURE,
	 FETCH_ONE_QUARK, FETCH_ONE_QUARK_FAILURE, CHANGE_CURRENT_QUARK} from '../types/quark';
import { API_HOST } from '../statics';
import LoginUtil from '../utils/login';

const ROOT_URL = 'http://' + API_HOST + '/';
const API_KEY = '?key=euonymus';

export const changeSearchKeyword = (keyword) => {
    return {
	type: CHANGE_SEARCH_KEYWORD,
	payload: keyword
    };
}

export const deleteQuark = (quark_id) => {
    const login_util = new LoginUtil();
    return dispatch => {
	let logged_in_user = JSON.parse(localStorage.getItem('logged_in_user'));
	if (!login_util.isLoggedIn(logged_in_user)) {
	    return {
		type: DELETE_QUARK_FAILURE,
		payload: false
	    };
	}

	axios.delete(`${ROOT_URL}delete_quark/${quark_id}${API_KEY}`, {
	    // headers: {'Content-Type': 'application/x-www-form-urlencoded'},
	    auth: {
		username: logged_in_user.username,
		password: logged_in_user.api_key_plain
	    }
	})
	    .then((response) => {
		dispatch({
		    type: DELETE_QUARK,
		    payload: response.data
		});
	    }).catch((response) => dispatch({
		type: DELETE_QUARK_FAILURE,
		error: response.error
	    }))
    }
}



// --------------------------------------------------------
export const fetchCurrentQuark = (quark_name, qtype_properties) => {
    return dispatch => {
	axios.get(`${ROOT_URL}quark/${quark_name}${API_KEY}`)
	    .then((response) => {
		dispatch({
		    type: FETCH_ONE_QUARK,
		    payload: {qtype_properties, response: response.data}
		});
	    }).catch((response) => dispatch({
		type: FETCH_ONE_QUARK_FAILURE,
		error: response.error
	    }))
    }
}
export const changeCurrentQuark = (quark) => {
    return {
	type: CHANGE_CURRENT_QUARK,
	payload: quark
    };
}

export const fetchQuarks = (qtype_properties, limit = 100) => {
    return dispatch => {
	axios.get(`${ROOT_URL}quarks${API_KEY}&limit=${limit}`)
	    .then((response) => {
		dispatch({
		    type: FETCH_QUARKS,
		    payload: {qtype_properties, response: response.data}
		});
	    }).catch((response) => dispatch({
		type: FETCH_QUARKS_FAILURE,
		error: response.error
	    }))
    }
}

export const searchQuarks = (qtype_properties, keywords, limit = 100) => {
    return dispatch => {
	axios.get(`${ROOT_URL}search${API_KEY}&keywords=${keywords}&limit=${limit}`)
	    .then((response) => {
		dispatch({
		    type: SEARCH_QUARKS,
		    payload: {qtype_properties, response: response.data}
		});
	    }).catch((response) => dispatch({
		type: SEARCH_QUARKS_FAILURE,
		error: response.error
	    }))
    }
}

export const fetchPickups = (qtype_properties) => {
    return dispatch => {
	axios.get(`${ROOT_URL}pickups${API_KEY}`)
	    .then((response) => {
		dispatch({
		    type: FETCH_PICKUPS,
		    payload: {qtype_properties, response: response.data}
		});
	    }).catch((response) => dispatch({
		type: FETCH_PICKUPS_FAILURE,
		error: response.error
	    }))
    }
}

export const execAddQuark = (form) => {
    const login_util = new LoginUtil();
    return dispatch => {
	let logged_in_user = JSON.parse(localStorage.getItem('logged_in_user'));
	if (!login_util.isLoggedIn(logged_in_user)) {
	    return {
		type: ADD_QUARK_FAILURE,
		payload: false
	    };
	}

	// let params = new URLSearchParams();
	// Object.keys(form).map((value, index) => {
	//     params.append(value, form[value]);
	// });
	let params = new URLSearchParams(form);
	axios.post(`${ROOT_URL}add_quark/${API_KEY}`, params, {
	    headers: {'Content-Type': 'application/x-www-form-urlencoded'},
	    auth: {
		username: logged_in_user.username,
		password: logged_in_user.api_key_plain
	    }
	})
	    .then((response) => {
		dispatch({
		    type: ADD_QUARK,
		    payload: response.data
		});
	    }).catch((response) => dispatch({
		type: ADD_QUARK_FAILURE,
		error: response.error
	    }))
    }
}

export const removeAddedQuark = (form) => {
    return {
	type: REMOVE_ADDED_QUARK,
	payload: null
    };
}

export const removeDeletedQuark = (form) => {
    return {
	type: REMOVE_DELETED_QUARK,
	payload: null
    };
}

export const fetchEditingQuark = (quark_id, qtype_properties) => {
    return dispatch => {
	axios.get(`${ROOT_URL}quark_by_id/${quark_id}${API_KEY}`)
	    .then((response) => {
		dispatch({
		    type: FETCH_EDITING_QUARK,
		    payload: {qtype_properties, response: response.data}
		});
	    }).catch((response) => dispatch({
		type: FETCH_EDITING_QUARK_FAILURE,
		error: response.error
	    }))
    }
}
export const readEditingQuark = (quark_id, quarks) => {
    if (!quarks || !quarks.list || Object.keys(quarks.list).length == 0) {
	return {
	    type: READ_EDITING_QUARK_FAILURE,
	    payload: null
	};
    }
    return {
	type: READ_EDITING_QUARK,
	payload: quarks.list[quark_id]
    };
}
export const execEditQuark = (form) => {
    const login_util = new LoginUtil();
    return dispatch => {
	let logged_in_user = JSON.parse(localStorage.getItem('logged_in_user'));
	if (!login_util.isLoggedIn(logged_in_user) || !form.id ) {
	    return {
		type: EDIT_QUARK_FAILURE,
		payload: false
	    };
	}
	let params = new URLSearchParams(form);
	axios.post(`${ROOT_URL}edit_quark/form.id${API_KEY}`, params, {
	    headers: {'Content-Type': 'application/x-www-form-urlencoded'},
	    auth: {
		username: logged_in_user.username,
		password: logged_in_user.api_key_plain
	    }
	})
	    .then((response) => {
console.log(response);
		dispatch({
		    type: EDIT_QUARK, 
		    payload: response.data
		});
	    }).catch((response) => dispatch({
		type: EDIT_QUARK_FAILURE,
		error: response.error
	    }))
    }
}



// --------------------------------------------------------
