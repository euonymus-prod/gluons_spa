import _ from 'lodash';
import { FETCH_ONE_QUARK } from '../types/quark';
import { FETCH_GLUONS } from '../types/gluon';
import Util from '../utils/common';
import QuarkUtil from '../utils/quark';
import GluonUtil from '../utils/gluon';

const initState = {list: {}, quark_name2id: {}};
export default (state = initState, action) => {
    let copiedState = JSON.parse(JSON.stringify(state));
    let quark_util = new QuarkUtil();
    
    switch(action.type) {
    case FETCH_ONE_QUARK:
	let quark = quark_util.addExtendedInfo(action.payload.response, action.payload.qtype_properties);
	let newState = {
	    list:          { ...state.list, [quark.id]: quark },
	    quark_name2id: {...state.quark_name2id, [quark.name]: quark.id }
	};
	return newState;
    case FETCH_GLUONS:
console.log('xxxxxxxxxxxx');
console.log(copiedState.list);
	// add gluons on current quark 
	copiedState.list[action.payload.quark.id] = quark_util.addGluons(copiedState.list[action.payload.quark.id], action.payload.response);
console.log(copiedState.list);

	// add quarks on gluons
	let newQuarks = {};
	let newQuarkName2Id = {};
console.log(1111111111111);
console.log(newQuarks);
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
console.log(newQuarks);
	    });
	});
	copiedState = {
	    list:          {...copiedState.list, ...newQuarks },
	    quark_name2id: {...state.quark_name2id, ...newQuarkName2Id }
	};
console.log(22222222222222);
console.log(action.payload.quark.name);
// TODO: state が同時平行で処理中のデータを保持できていない問題がある。
console.log(state.list);
console.log(newQuarks);
console.log(copiedState.list);
console.log('xxxxxxxxxxxx');
	return copiedState;

    default :
	return state
    }
}
