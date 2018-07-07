import { FETCH_EDITING_GLUON } from '../types/gluon';
import Util from '../utils/common';

const initState = null;
export default (state = initState, action) => {
    let util = new Util();
    switch(action.type) {

    case FETCH_EDITING_GLUON:
	action.payload['status'] = -1;
	action.payload['start'] = util.date2str(action.payload['start'], 'day');
	action.payload['end'] = util.date2str(action.payload['end'], 'day');
	return action.payload;

    default :
	return state
    }
}

