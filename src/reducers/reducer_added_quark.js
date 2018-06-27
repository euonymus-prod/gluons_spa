import _ from 'lodash';
import { ADD_QUARK, REMOVE_ADDED_QUARK } from '../types/quark';

const initState = null;
export default (state = initState, action) => {
    switch(action.type) {

    case ADD_QUARK:
	return action.payload;

    case REMOVE_ADDED_QUARK:
	return initState

    default :
	return state
    }
}
