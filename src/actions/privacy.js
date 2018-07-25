import { INIT_PRIVACY, CHANGE_PRIVACY } from '../types/privacy';

export const initPrivacy = () => {
    let privacy_id = 1
    let privacy_mode = JSON.parse(localStorage.getItem('privacy_mode'));
    if (privacy_mode) {
	privacy_id = privacy_mode
    }
    return {
	type: INIT_PRIVACY,
	payload: privacy_id
    };
}

export const changePrivacyTo = (privacy_id) => {
    localStorage.setItem('privacy_mode', JSON.stringify(privacy_id));
    return {
	type: CHANGE_PRIVACY,
	payload: privacy_id
    };
}
