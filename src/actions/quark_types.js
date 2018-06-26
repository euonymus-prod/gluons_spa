import axios from 'axios';
import { FETCH_QUARK_TYPES, FETCH_QUARK_TYPES_FAILURE } from '../types/quark_types';
import { API_HOST } from '../statics';

const ROOT_URL = 'http://' + API_HOST + '/';
const API_KEY = '?key=euonymus';

export const fetchQuarkTypes = () => {
    return dispatch => {
	axios.get(`${ROOT_URL}quark_types/${API_KEY}`)
	    .then((response) => {
		localStorage.setItem('quark_types', JSON.stringify(response.data));
		dispatch({
		    type: FETCH_QUARK_TYPES,
		    payload: response.data
		});
	    }).catch((response) => dispatch({
		type: FETCH_QUARK_TYPES_FAILURE,
		error: response.error
	    }))
    }
}
