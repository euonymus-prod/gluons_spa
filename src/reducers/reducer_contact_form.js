import { SEND_CONTACT_FORM, REMOVE_CONTACT_FORM  } from '../types/contact';

const initState = null;
export default (state = initState, action) => {
    switch(action.type) {
    case SEND_CONTACT_FORM :
	return action.payload;

    case REMOVE_CONTACT_FORM :
	return initState;

    default :
	return state
    }
}
