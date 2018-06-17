import { FETCH_SUGGEST } from '../types/search';
export const fetchSuggest = (keyword) => {
    return dispatch => {
	dispatch({
	    type: FETCH_SUGGEST,
	    payload: {
		keyword
	    }
	})
    }
}
