import { FETCH_ONE_QUARK } from '../types/quark';
import Util from '../common';

const initState = {};
export default (state = initState, action) => {
    switch(action.type) {
    case FETCH_ONE_QUARK:
	let util = new Util();
	action.payload.period_str = util.period2str(action.payload);
	return { ...state, [action.payload.id]: action.payload };
    default :
	return state
    }
}




