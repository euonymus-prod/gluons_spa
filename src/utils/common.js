import moment from 'moment'
class Util {
    period2str(quark) {
	if (!quark.start && !quark.end) return '';

	let start_str = this.date2str(quark.start, quark.start_accuracy);
	let end_str = this.date2str(quark.end, quark.end_accuracy);

	let ret = '';
	if (quark.is_momentary) {
	    ret = '(' + start_str + ')';
	} else {
	    ret = '(' + start_str;
	    ret = ret + ' ~ ';
	    ret = ret + end_str + ')';
	}
	return ret;
    }
    date2str(date, accuracy) {
	if (!date) return '';
	let format = '';
	if (accuracy == 'year') {
	    format = 'YYYY';
	} else if (accuracy == 'month') {
	    format = 'YYYY-MM';
	} else if (accuracy == 'day') {
	    format = 'YYYY-MM-DD';
	} else {
	    format = 'YYYY-MM-DD';
	}
	return moment(date).format(format);
    }
}
export default Util;
