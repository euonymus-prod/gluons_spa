import _ from 'lodash';
import { FETCH_GLUONS } from '../types/gluon';

const initState = {};
export default (state = initState, action) => {
    let newGluons = {};
    switch(action.type) {
    case FETCH_GLUONS:
	Object.keys(action.payload.response).map((value, index) => {
	    newGluons = {...newGluons, ..._.mapKeys(action.payload.response[value], 'id')}
	});
	return newGluons;

    default :
	return state
    }
}
