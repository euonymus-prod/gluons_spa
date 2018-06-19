import { CHANGE_SEARCH_KEYWORD } from '../types/quark';

const initState = null;
export default (state = initState, action) => {
    switch(action.type) {
    case CHANGE_SEARCH_KEYWORD :
	return action.payload;
    default :
	return state
    }
}
