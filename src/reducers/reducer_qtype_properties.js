import { FETCH_QTYPE_PROPERTIES } from '../types/qtype_property';

const initState = null;
export default (state = initState, action) => {
    switch(action.type) {
    case FETCH_QTYPE_PROPERTIES :
	return action.payload;
    default :
	let qtype_properties = JSON.parse(localStorage.getItem('qtype_properties'));
	return qtype_properties
    }
}
