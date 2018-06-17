import { FETCH_SUGGEST } from '../types/search';
const initState = {
    keyword: ''
}
export default (state = initState, action) => {
    switch(action.type) {
    case FETCH_SUGGEST :
	return {...state, keyword: action.payload.keyword}
    default :
	return state
    }
}
