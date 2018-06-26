import _ from 'lodash';
import { FETCH_ONE_QUARK, FETCH_QUARKS, SEARCH_QUARKS } from '../types/quark';

const initState = [];
export default (state = initState, action) => {
    
    switch(action.type) {
    case FETCH_QUARKS:
	return action.payload.response;

    case SEARCH_QUARKS:
	return action.payload.response;

    default :
		return state
    }
}
