import { EXEC_LOGIN } from '../types/login';

const initState = null;
export default (state = initState, action) => {
    switch(action.type) {
    case EXEC_LOGIN :
	return action.payload;
    default :
	return state
    }
}
