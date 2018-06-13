import { FETCH_QUARK } from '../types/quark';
import moment from 'moment'

const initState = null;
export default (state = initState, action) => {
    switch(action.type) {
    case FETCH_QUARK :
	// return {...state, quark: action.payload}
	action.payload.period_str = period2str(action.payload);
	return action.payload;
    default :
	return state
 }
}

function period2str(quark) {
    if (!quark.start && !quark.end) return '';

    let start_str = date2str(quark.start, quark.start_accuracy);
    let end_str = date2str(quark.end, quark.end_accuracy);

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
function date2str(date, accuracy) {
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
