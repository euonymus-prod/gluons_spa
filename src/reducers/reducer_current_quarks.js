import _ from 'lodash';
import { FETCH_ONE_QUARK, FETCH_QUARKS, FETCH_QUARKS_FAILURE, SEARCH_QUARKS } from '../types/quark';
import { CHANGE_PRIVACY } from '../types/privacy';

const initState = [];
export default (state = initState, action) => {
    
    switch(action.type) {
    case FETCH_QUARKS:
	return action.payload.response;

    case FETCH_QUARKS_FAILURE:
	return [{'error': 'failed to fetch'}]

    case SEARCH_QUARKS:
	return action.payload.response;

    case CHANGE_PRIVACY:
	return initState

    default :
	return state
    }
}
