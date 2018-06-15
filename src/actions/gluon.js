/*
This action is not used !!!
*/
import axios from 'axios';

import { FETCH_GLUONS, FETCH_GLUONS_FAILURE } from '../types/gluon';
import { API_HOST } from '../statics';

const ROOT_URL = 'http://' + API_HOST + '/';
const API_KEY = '?key=euonymus';

export const fetchGluons = (quark_id, quark_property_id) => {
    return dispatch => {
	axios.get(`${ROOT_URL}gluons/${quark_id}/${quark_property_id}${API_KEY}`)
	    .then((response) => {
		dispatch({
		    type: FETCH_GLUONS,
		    payload: response.data
		});
	    }).catch((response) => dispatch({
		type: FETCH_GLUONS_FAILURE,
		error: response.error
	    }))
    }
}
