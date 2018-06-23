import Util from '../utils/common';
class QuarkUtil {
    addExtendedInfo(quark, qtype_properties, is_gluon_fetched = false) {
	// Additional initial info on this quark

	let util = new Util();
	quark.period_str = util.period2str(quark);
	
	let quark_properties = qtype_properties[quark.quark_type_id];
	if (!quark_properties) {
	    quark_properties = null;
	}
	quark.quark_properties = quark_properties;
	quark.is_gluon_fetched = is_gluon_fetched;
	return quark;
    }

    addGluons(quark, response) {
	let quark_properties = [];
	if (quark.quark_properties) {
	    quark_properties = quark.quark_properties.map(x => {
		let gluons = response[x.quark_property_id];
		if (!gluons) {
		    return null;
		}
		x.quark_property.gluons = gluons;
		return x;
	    });
	}

	let active_prop = {id: 'active', quark_type_id: 2, quark_property_id: 'active', is_required: false};
	active_prop['quark_property'] = {id: 'active', caption_ja: quark.name + 'とは',
					 gluons: response.active}
	quark_properties.push(active_prop);
	let passive_prop = {id: 'passive', quark_type_id: 2, quark_property_id: 'passive', is_required: false};
	passive_prop['quark_property'] = {id: 'passive', caption_ja: quark.name + 'に関する事項',
					  gluons: response.passive}
	quark_properties.push(passive_prop);


	quark.quark_properties = quark_properties;
	quark.is_gluon_fetched = true;
	return quark;
    }
}
export default QuarkUtil;
