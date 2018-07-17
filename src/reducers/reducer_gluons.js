/*
This reducer is not used !!!
*/
import _ from 'lodash';
import { FETCH_GLUONS } from '../types/gluon';
import { CHANGE_PRIVACY } from '../types/privacy';

const initState = {};
export default (state = initState, action) => {
    let newGluons = {};
    switch(action.type) {
    case FETCH_GLUONS:
	Object.keys(action.payload.response).map((value, index) => {
	    newGluons = {...newGluons, ..._.mapKeys(action.payload.response[value], 'id')}
	});
	return newGluons;

    case CHANGE_PRIVACY:
	return initState

    default :
	return state
    }
}
