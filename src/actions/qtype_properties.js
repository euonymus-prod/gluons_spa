import axios from 'axios';
import { FETCH_QTYPE_PROPERTIES, FETCH_QTYPE_PROPERTIES_FAILURE } from '../types/qtype_property';
import { API_HOST, API_KEY } from '../statics';

const ROOT_URL = 'http://' + API_HOST + '/';
const API_KEY_QUERY = '?key=' + API_KEY;

export const fetchQtypeProperties = () => {
    return dispatch => {
	axios.get(`${ROOT_URL}qtype_properties/${API_KEY_QUERY}`)
	    .then((response) => {
		localStorage.setItem('qtype_properties', JSON.stringify(response.data));
		dispatch({
		    type: FETCH_QTYPE_PROPERTIES,
		    payload: response.data
		});
	    }).catch((response) => dispatch({
		type: FETCH_QTYPE_PROPERTIES_FAILURE,
		error: response.error
	    }))
    }
}
