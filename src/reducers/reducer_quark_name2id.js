import { FETCH_ONE_QUARK } from '../types/quark';

const initState = new Map();
export default (state = initState, action) => {
    switch(action.type) {
    case FETCH_ONE_QUARK :
	// let newMap = new Map();
	// let newMap = Object.assign({}, state);
	let newMap = state;
	newMap.set(action.payload['name'], action.payload['id']);

	return newMap;
    default :
	return state
    }
}
