import { // adding
         ADD_QUARK, ADD_QUARK_FAILURE,
         // editing
         EDIT_QUARK, EDIT_QUARK_FAILURE,
         // deleting
         DELETE_QUARK, DELETE_QUARK_FAILURE,
} from '../types/quark';
import { // adding
         ADD_GLUON, ADD_GLUON_FAILURE,
         // editing
         EDIT_GLUON, EDIT_GLUON_FAILURE,
         // deleting
         DELETE_GLUON, DELETE_GLUON_FAILURE,
} from '../types/gluon';
import { SEND_CONTACT_FORM, SEND_CONTACT_FORM_FAILURE } from '../types/contact';

const initState = 0;
export default (state = initState, action) => {
    switch(action.type) {
    case ADD_QUARK:
    case ADD_QUARK_FAILURE:
    case EDIT_QUARK:
    case EDIT_QUARK_FAILURE:
    case DELETE_QUARK:
    case DELETE_QUARK_FAILURE:
    case ADD_GLUON:
    case ADD_GLUON_FAILURE:
    case EDIT_GLUON:
    case EDIT_GLUON_FAILURE:
    case DELETE_GLUON:
    case DELETE_GLUON_FAILURE:
    case SEND_CONTACT_FORM:
    case SEND_CONTACT_FORM_FAILURE:
	return state + 1
    default :
	return state
    }
}
