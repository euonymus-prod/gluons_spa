import { FETCH_QUARK_PROPERTIES } from '../types/quark';

const initState = null;
export default (state = initState, action) => {
    switch(action.type) {
    case FETCH_QUARK_PROPERTIES :
	return action.payload;
    default :
	return state
    }
}
