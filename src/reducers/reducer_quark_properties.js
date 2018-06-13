import { FETCH_QUARK_PROPERTIES } from '../types/quark';
import moment from 'moment'

const initState = null;
export default (state = initState, action) => {
    switch(action.type) {
    case FETCH_QUARK_PROPERTIES :
	return action.payload;
    default :
	return state
    }
}
