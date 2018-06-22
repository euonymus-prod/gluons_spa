import { FETCH_ONE_QUARK } from '../types/quark';
import Util from '../common';

const initState = {list: {}, quark_name2id: {}};
export default (state = initState, action) => {
    switch(action.type) {
    case FETCH_ONE_QUARK:
	let util = new Util();
	action.payload.period_str = util.period2str(action.payload);
	let newObj = {
	    list:          { ...state.list, [action.payload.id]: action.payload },
	    quark_name2id: {...state.quark_name2id, [action.payload.name]: action.payload.id }
	};
	return newObj;
    default :
	return state
    }
}




