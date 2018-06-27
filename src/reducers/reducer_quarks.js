import _ from 'lodash';
import { FETCH_ONE_QUARK, FETCH_QUARKS, SEARCH_QUARKS, FETCH_PICKUPS } from '../types/quark';
import { FETCH_GLUONS } from '../types/gluon';
import Util from '../utils/common';
import QuarkUtil from '../utils/quark';
import GluonUtil from '../utils/gluon';

const initState = {list: {}, quark_name2id: {}};
export default (state = initState, action) => {
    let copiedState = JSON.parse(JSON.stringify(state));
    let quark_util = new QuarkUtil();
    
    let newQuarks = {};
    let newQuarkName2Id = {};

    switch(action.type) {
    case FETCH_ONE_QUARK:
	let quark = quark_util.addExtendedInfo(action.payload.response, action.payload.qtype_properties);
	let newState = {
	    list:          { ...state.list, [quark.id]: quark },
	    quark_name2id: {...state.quark_name2id, [quark.name]: quark.id }
	};
	return newState;
    case FETCH_GLUONS:
	// add gluons on current quark 
	let current_quark = JSON.parse(JSON.stringify(quark_util.addExtendedInfo(copiedState.list[action.payload.quark.id], action.payload.qtype_properties)));
	copiedState.list[action.payload.quark.id] = quark_util.addGluons(current_quark, action.payload.response);

	// add quarks on gluons
	Object.keys(action.payload.response).map((value, index) => {
	    action.payload.response[value].map(x => {
		let quark = {};
		let gluon_util = new GluonUtil();
		quark = gluon_util.gluedQuark(action.payload.quark, x);
		if (!quark) {
		    return false;
		}
		if (state.list[quark.id] && state.list[quark.id].is_gluon_fetched) {
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

    case FETCH_QUARKS:
	action.payload.response.map(quark => {
	    quark = quark_util.addExtendedInfo(quark, action.payload.qtype_properties);

	    newQuarks[quark.id] = quark;
	    newQuarkName2Id[quark.name] = quark.id;
	});
	copiedState = {
	    list:          {...copiedState.list, ...newQuarks },
	    quark_name2id: {...state.quark_name2id, ...newQuarkName2Id }
	};

	return copiedState;

    case SEARCH_QUARKS:
	action.payload.response.map(quark => {
	    quark = quark_util.addExtendedInfo(quark, action.payload.qtype_properties);

	    newQuarks[quark.id] = quark;
	    newQuarkName2Id[quark.name] = quark.id;
	});
	copiedState = {
	    list:          {...copiedState.list, ...newQuarks },
	    quark_name2id: {...state.quark_name2id, ...newQuarkName2Id }
	};

	return copiedState;

    case FETCH_PICKUPS:
	action.payload.response.map(quark => {
	    quark = quark_util.addExtendedInfo(quark, action.payload.qtype_properties);

	    newQuarks[quark.id] = quark;
	    newQuarkName2Id[quark.name] = quark.id;
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
