import axios from 'axios';

import { FETCH_GLUONS, FETCH_GLUONS_FAILURE } from '../types/gluon';

const ROOT_URL = 'http://ja.localhost:8765/';
const API_KEY = '?key=euonymus';

export const fetchGluons = (quark_id, quark_property_id) => {
    return dispatch => {
	axios.get(`${ROOT_URL}gluons/${quark_id}/${quark_property_id}${API_KEY}`)
	    .then((response) => {
		dispatch({
		    type: FETCH_GLUONS,
		    payload: response.data
		});
		console.log(response.data);
	    }).catch((response) => dispatch({
		type: FETCH_GLUONS_FAILURE,
		error: response.error
	    }))
    }
}
