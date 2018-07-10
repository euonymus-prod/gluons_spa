import axios from 'axios';

import { SEND_CONTACT_FORM, SEND_CONTACT_FORM_FAILURE } from '../types/contact';
import { API_HOST } from '../statics';
import LoginUtil from '../utils/login';

const ROOT_URL = 'http://' + API_HOST + '/';
const API_KEY = '?key=euonymus';

export const sendContactForm = (form) => {
    return dispatch => {
console.log(form)
// 	let params = new URLSearchParams(form);
// 	axios.post(`${ROOT_URL}contact/send${API_KEY}`, params, {
// 	    headers: {'Content-Type': 'application/x-www-form-urlencoded'},
// 	})
// 	    .then((response) => {
// console.log(response)
// 		dispatch({
// 		    type: SEND_CONTACT_FORM,
// 		    payload: response.data
// 		});
// 	    }).catch((response) => dispatch({
// 		type: SEND_CONTACT_FORM_FAILURE,
// 		error: response.error
// 	    }))
    }
}
