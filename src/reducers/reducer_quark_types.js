import { FETCH_QUARK_TYPES } from '../types/quark_types';

const initState = null;
export default (state = initState, action) => {
    switch(action.type) {
    case FETCH_QUARK_TYPES :
	return action.payload;
    default :
	let quark_types = JSON.parse(localStorage.getItem('quark_types'));
	return quark_types
    }
}
