import { ADD_GLUON, REMOVE_ADDED_GLUON } from '../types/gluon';

const initState = null;
export default (state = initState, action) => {
    switch(action.type) {

    case ADD_GLUON:
	return action.payload;

    case REMOVE_ADDED_GLUON:
	return initState

    default :
	return state
    }
}
