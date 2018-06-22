class GluonUtil {
    gluedQuark(current_quark, gluon) {
	if (current_quark.id == gluon.active_id) {
	    return gluon.passive
	} else if (current_quark.id == gluon.passive_id) {
	    return gluon.active
	}
	return false;
    }
}
export default GluonUtil;
