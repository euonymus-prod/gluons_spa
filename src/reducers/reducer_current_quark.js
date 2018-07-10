import { CHANGE_CURRENT_QUARK, EDIT_QUARK } from '../types/quark';
import { FETCH_GLUONS, FETCH_GLUONS_FAILURE, FETCH_ONE_QUARK_NOT_FOUND,
	 ADD_GLUON, EDIT_GLUON, REMOVE_DELETED_GLUON } from '../types/gluon';
import Util from '../utils/common';
import QuarkUtil from '../utils/quark';

const initState = null;
export default (state = initState, action) => {
    let copiedState = JSON.parse(JSON.stringify(state));
    switch(action.type) {

    case CHANGE_CURRENT_QUARK :
    case EDIT_QUARK:
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
	
    // This should be optimized to be more presisely configured when reducer should return initState
    case ADD_GLUON:
    case EDIT_GLUON:
    case REMOVE_DELETED_GLUON:
	return initState

    default :
	return state
    }
}
