import { FETCH_ONE_QUARK } from '../types/quark';

const initState = {};
export default (state = initState, action) => {
    switch(action.type) {
    case FETCH_ONE_QUARK :
	return { ...state, [action.payload.name]: action.payload.id };
    default :
	return state
    }
}
