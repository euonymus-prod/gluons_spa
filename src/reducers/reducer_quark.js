import { SET_QUARK } from '../types/message';
const initState = {
    quark: ''
}
export default (state = initState, action) => {
    switch(action.type) {
    case SET_QUARK :
	return {...state, quark: action.payload.quark}
    default :
	return state
 }
}
