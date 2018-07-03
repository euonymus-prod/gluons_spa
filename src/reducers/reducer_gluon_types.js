import { FETCH_GLUON_TYPES } from '../types/gluon_types';

const initState = null;
export default (state = initState, action) => {
    switch(action.type) {
    case FETCH_GLUON_TYPES :
	return action.payload;
    default :
	let gluon_types = JSON.parse(localStorage.getItem('gluon_types'));
	return gluon_types
    }
}
