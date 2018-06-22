import _ from 'lodash';
import { FETCH_ONE_QUARK } from '../types/quark';
import { FETCH_GLUONS } from '../types/gluon';
import Util from '../common';

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
	let quark_properties = [];
	if (action.payload.quark.quark_properties) {
	    quark_properties = action.payload.quark.quark_properties.map(x => {
		let gluons = action.payload.response[x.quark_property_id];
		if (!gluons) {
		    return null;
		}
		x.quark_property.gluons = gluons;
		return x;
	    });
	}

	let active_prop = {id: 'active', quark_type_id: 2, quark_property_id: 'active', is_required: false};
	active_prop['quark_property'] = {id: 'active', caption_ja: action.payload.quark.name + 'とは',
					 gluons: action.payload.response.active}
	quark_properties.push(active_prop);
	let passive_prop = {id: 'passive', quark_type_id: 2, quark_property_id: 'passive', is_required: false};
	passive_prop['quark_property'] = {id: 'passive', caption_ja: action.payload.quark.name + 'に関する事項',
					  gluons: action.payload.response.passive}
	quark_properties.push(passive_prop);

	copiedState.list[action.payload.quark.id].quark_properties = quark_properties;
	copiedState.list[action.payload.quark.id].is_gluon_fetched = true;


	// quarks on gluons
	let newQuarks = {};
	let newQuarkName2Id = {};
	Object.keys(action.payload.response).map((value, index) => {
	    action.payload.response[value].map(x => {
		let quark = {};
		if (action.payload.quark.id == x.active_id) {
		    quark = x.passive;
		} else if (action.payload.quark.id == x.passive_id) {
		    quark = x.active;
		} else {
		    return false;
		}

		let quark_properties = action.payload.qtype_properties[quark.quark_type_id];
		if (!quark_properties) {
		    quark_properties = null;
		}
		quark.quark_properties = quark_properties;
		quark.is_gluon_fetched = false;

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
