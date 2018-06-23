import axios from 'axios';

import { FETCH_QUARK, FETCH_QUARK_FAILURE, FETCH_QUARK_PROPERTIES, FETCH_QUARK_PROPERTIES_FAILURE,
	 CHANGE_SEARCH_KEYWORD, CHANGE_SEARCH_KEYWORD_FAILURE, DELETE_QUARK, DELETE_QUARK_FAILURE,
	 FETCH_ONE_QUARK, FETCH_ONE_QUARK_FAILURE, CHANGE_CURRENT_QUARK} from '../types/quark';
import { API_HOST } from '../statics';
import QuarkUtil from '../utils/quark';

const ROOT_URL = 'http://' + API_HOST + '/';
// const ROOT_URL = 'http://reduxblog.herokuapp.com/api';
const API_KEY = '?key=euonymus';

/*
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
*/

export const changeSearchKeyword = (keyword) => {
    return {
	type: CHANGE_SEARCH_KEYWORD,
	payload: keyword
    };
}

export const deleteQuark = (quark_id) => {
    return dispatch => {
	axios.get(`${ROOT_URL}quark/delete/${quark_id}${API_KEY}`)
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
// --------------------------------------------------------
