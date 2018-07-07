import { DELETE_GLUON, REMOVE_DELETED_GLUON } from '../types/gluon';

const initState = null;
export default (state = initState, action) => {
    switch(action.type) {

    case DELETE_GLUON:
	action.payload.response.gluon_id = action.payload.gluon_id
	return action.payload.response

    case REMOVE_DELETED_GLUON:
	return initState

    default :
	return state
    }
}
