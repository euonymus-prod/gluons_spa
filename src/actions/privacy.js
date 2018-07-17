import { CHANGE_PRIVACY } from '../types/privacy';

export const changePrivacyTo = (privacy_id) => {
    return {
	type: CHANGE_PRIVACY,
	payload: privacy_id
    };
}
