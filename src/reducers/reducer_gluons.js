import { FETCH_GLUONS } from '../types/gluon';
import moment from 'moment'

const initState = null;
export default (state = initState, action) => {
    switch(action.type) {
    case FETCH_GLUONS:
	return action.payload;
    default :
	return state
    }
}
