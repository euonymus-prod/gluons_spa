import _ from 'lodash';
import { ADD_QUARK } from '../types/quark';

const initState = null;
export default (state = initState, action) => {
    switch(action.type) {

    case ADD_QUARK:
	if (action.payload.status == 1) {
	    return action.payload.result;
	} else {
	    return state
	}

    default :
	return state
    }
}
