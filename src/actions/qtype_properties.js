import axios from 'axios';
import { FETCH_QTYPE_PROPERTIES, FETCH_QTYPE_PROPERTIES_FAILURE } from '../types/qtype_property';
import { API_URI } from '../statics';

export const fetchQtypeProperties = () => {
    return dispatch => {
	axios.get(`${API_URI}/qtype_properties`)
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
