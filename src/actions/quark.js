import axios from 'axios';

import { FETCH_QUARK, FETCH_QUARK_FAILURE, FETCH_QUARK_PROPERTIES, FETCH_QUARK_FAILURE_PROPERTIES } from '../types/quark';
import { API_HOST } from '../statics';

const ROOT_URL = 'http://' + API_HOST + '/';
// const ROOT_URL = 'http://reduxblog.herokuapp.com/api';
const API_KEY = '?key=euonymus';

export const fetchQuark = (quark_name) => {
    return dispatch => {
	axios.get(`${ROOT_URL}quark/${quark_name}${API_KEY}`)
	    .then((response) => {
		dispatch({
		    type: FETCH_QUARK,
		    payload: response.data
		});
	    }).catch((response) => dispatch({
		type: FETCH_QUARK_FAILURE,
		error: response.error
	    }))
    }
}

export const fetchQuarkProperties = (quark_type_id) => {
    return dispatch => {
	axios.get(`${ROOT_URL}quark_properties/${quark_type_id}${API_KEY}`)
	    .then((response) => {
		dispatch({
		    type: FETCH_QUARK_PROPERTIES,
		    payload: response.data
		});
	    }).catch((response) => dispatch({
		type: FETCH_QUARK_PROPERTIES_FAILURE,
		error: response.error
	    }))
    }
}