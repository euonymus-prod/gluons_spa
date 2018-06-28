import { READ_EDITING_QUARK } from '../types/quark';

const initState = null;
export default (state = initState, action) => {
    switch(action.type) {

    case READ_EDITING_QUARK:
	action.payload['status'] = -1;
	return action.payload;

    default :
	return state
    }
}

