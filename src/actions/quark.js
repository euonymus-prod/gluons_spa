import axios from 'axios';

import { FETCH_QUARK, FETCH_QUARK_FAILURE } from '../types/quark';


const ROOT_URL = 'http://ja.localhost:8765/quark/';
// const ROOT_URL = 'http://reduxblog.herokuapp.com/api';
const API_KEY = '?key=euonymus';

export const fetchQuark = (quark_name) => {
    return dispatch => {
	axios.get(`${ROOT_URL}${quark_name}${API_KEY}`)
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
