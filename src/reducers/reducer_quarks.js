import { FETCH_ONE_QUARK } from '../types/quark';

const initState = new Map();
export default (state = initState, action) => {
    switch(action.type) {
    case FETCH_ONE_QUARK:
	let newMap = state;
	newMap.set(action.payload['id'], action.payload);
	return newMap;
    default :
	return state
    }
}




