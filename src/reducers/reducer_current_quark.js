import { CHANGE_CURRENT_QUARK } from '../types/quark';
import { FETCH_GLUONS, FETCH_GLUONS_FAILURE } from '../types/gluon';
import Util from '../common';

const initState = null;
export default (state = initState, action) => {
    switch(action.type) {
    case CHANGE_CURRENT_QUARK :
	let util = new Util();
	action.payload.period_str = util.period2str(action.payload);
	return action.payload;






    case FETCH_GLUONS :
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

	let newObj = JSON.parse(JSON.stringify(state));
	newObj.quark_properties = quark_properties;
	newObj.is_gluon_fetched = true;
	return newObj;
    default :
	return state
    }
}
