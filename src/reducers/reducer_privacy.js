import { CHANGE_PRIVACY } from '../types/privacy';

const initState = 1;
let return_state = initState
let privacy_mode = JSON.parse(localStorage.getItem('privacy_mode'));
if (privacy_mode) {
    return_state = privacy_mode
}
export default (state = initState, action) => {
    switch(action.type) {
    case CHANGE_PRIVACY:
	return action.payload;

    default :
	return return_state
    }
}
