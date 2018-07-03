import axios from 'axios';
import { FETCH_GLUON_TYPES, FETCH_GLUON_TYPES_FAILURE } from '../types/gluon_types';
import { API_HOST } from '../statics';

const ROOT_URL = 'http://' + API_HOST + '/';
const API_KEY = '?key=euonymus';

export const fetchGluonTypes = () => {
    return dispatch => {
	axios.get(`${ROOT_URL}gluon_types/${API_KEY}`)
	    .then((response) => {
		localStorage.setItem('gluon_types', JSON.stringify(response.data));
		dispatch({
		    type: FETCH_GLUON_TYPES,
		    payload: response.data
		});
	    }).catch((response) => dispatch({
		type: FETCH_GLUON_TYPES_FAILURE,
		error: response.error
	    }))
    }
}
