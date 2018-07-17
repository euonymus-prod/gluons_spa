import { CHANGE_PRIVACY } from '../types/privacy';

const initState = 1;
export default (state = initState, action) => {
    switch(action.type) {
    case CHANGE_PRIVACY:
	return action.payload;

    default :
	return state
    }
}
