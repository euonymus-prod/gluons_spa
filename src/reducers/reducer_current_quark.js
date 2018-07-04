import { CHANGE_CURRENT_QUARK } from '../types/quark';
import { FETCH_GLUONS, FETCH_GLUONS_FAILURE, FETCH_ONE_QUARK_NOT_FOUND } from '../types/gluon';
import Util from '../utils/common';
import QuarkUtil from '../utils/quark';

const initState = null;
export default (state = initState, action) => {
    let copiedState = JSON.parse(JSON.stringify(state));
    switch(action.type) {

    case CHANGE_CURRENT_QUARK :
	let util = new Util();
	action.payload.period_str = util.period2str(action.payload);
	return action.payload;


    case FETCH_GLUONS :
	let quark_util = new QuarkUtil();
	if (state.id == action.payload.quark.id) {
		copiedState = quark_util.addGluons(copiedState, action.payload.response);
	}	
	return copiedState;

    case FETCH_ONE_QUARK_NOT_FOUND:
	return action.payload
	
    default :
	return state
    }
}
