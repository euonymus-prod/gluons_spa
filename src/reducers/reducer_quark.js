import { FETCH_QUARK } from '../types/quark';
import Util from '../common';

const initState = null;
export default (state = initState, action) => {
    switch(action.type) {
    case FETCH_QUARK :
	// return {...state, quark: action.payload}
	let util = new Util();
	action.payload.period_str = util.period2str(action.payload);
	return action.payload;
    default :
	return state
    }
}
