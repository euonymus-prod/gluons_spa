import axios from 'axios';

import { FETCH_GLUONS, FETCH_GLUONS_FAILURE,
	 FETCH_SUB_GLUONS, FETCH_SUB_GLUONS_FAILURE} from '../types/gluon';
import { API_HOST } from '../statics';

const ROOT_URL = 'http://' + API_HOST + '/';
const API_KEY = '?key=euonymus';

export const fetchGluons = (quark, qtype_properties, limit = 100) => {
    return dispatch => {
	axios.get(`${ROOT_URL}gluons/${quark.id}/${quark.quark_type_id}/${API_KEY}&limit=${limit}`)
	    .then((response) => {
		dispatch({
		    type: FETCH_GLUONS,
		    payload: {qtype_properties, quark, response: response.data}
		});
	    }).catch((response) => dispatch({
		type: FETCH_GLUONS_FAILURE,
		error: response.error
	    }))
    }
}

// このactionは不要かも
export const fetchSubGluons = (quark, qtype_properties) => {
    return dispatch => {
	axios.get(`${ROOT_URL}gluons/${quark.id}/${quark.quark_type_id}/${API_KEY}`)
	    .then((response) => {
		dispatch({
		    type: FETCH_SUB_GLUONS,
		    payload: {qtype_properties, quark, response: response.data}
		});
	    }).catch((response) => dispatch({
		type: FETCH_SUB_GLUONS_FAILURE,
		error: response.error
	    }))
    }
}
