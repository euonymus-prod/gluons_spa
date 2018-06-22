import _ from 'lodash';
import { FETCH_ONE_QUARK } from '../types/quark';
import { FETCH_GLUONS } from '../types/gluon';
import Util from '../utils/common';
import QuarkUtil from '../utils/quark';
import GluonUtil from '../utils/gluon';

const initState = {list: {}, quark_name2id: {}};
export default (state = initState, action) => {
    let copiedState = JSON.parse(JSON.stringify(state));
    switch(action.type) {
    case FETCH_ONE_QUARK:
	let util = new Util();
	action.payload.period_str = util.period2str(action.payload);
	let newState = {
	    list:          { ...state.list, [action.payload.id]: action.payload },
	    quark_name2id: {...state.quark_name2id, [action.payload.name]: action.payload.id }
	};
	return newState;
    case FETCH_GLUONS:
	// add gluons on current quark 
	let quark_util = new QuarkUtil();
	copiedState.list[action.payload.quark.id] = quark_util.addGluons(copiedState.list[action.payload.quark.id], action.payload.response);

	// quarks on gluons
	let newQuarks = {};
	let newQuarkName2Id = {};
	Object.keys(action.payload.response).map((value, index) => {
	    action.payload.response[value].map(x => {
		let quark = {};
		let gluon_util = new GluonUtil();
		quark = gluon_util.gluedQuark(action.payload.quark, x);
		if (!quark) {
		    return false;
		}
		quark = quark_util.addExtendedInfo(quark, action.payload.qtype_properties);

		newQuarks[quark.id] = quark;
		newQuarkName2Id[quark.name] = quark.id;
	    });
	});
	copiedState = {
	    list:          {...copiedState.list, ...newQuarks },
	    quark_name2id: {...state.quark_name2id, ...newQuarkName2Id }
	};
	return copiedState;

    default :
	return state
    }
}
