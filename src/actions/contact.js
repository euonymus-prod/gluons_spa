import axios from 'axios';

import { SEND_CONTACT_FORM, SEND_CONTACT_FORM_FAILURE,
	 REMOVE_CONTACT_FORM, REMOVE_CONTACT_FORM_FAILURE } from '../types/contact';
import { API_HOST, API_KEY } from '../statics';
import LoginUtil from '../utils/login';

const ROOT_URL = 'http://' + API_HOST + '/';
const API_KEY_QUERY = '?key=' + API_KEY;

export const sendContactForm = (form) => {
    return dispatch => {
	let params = new URLSearchParams(form);
	axios.post(`${ROOT_URL}contacts/send${API_KEY_QUERY}`, params, {
	    headers: {'Content-Type': 'application/x-www-form-urlencoded'},
	})
	    .then((response) => {
		dispatch({
		    type: SEND_CONTACT_FORM,
		    payload: response.data
		});
	    }).catch((response) => dispatch({
		type: SEND_CONTACT_FORM_FAILURE,
		error: response.error
	    }))
    }
}
export const removeContactForm = () => {
    return {
	type: REMOVE_CONTACT_FORM,
	payload: null
    };
}
