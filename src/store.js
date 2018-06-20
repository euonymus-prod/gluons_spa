import { createStore, combineReducers, applyMiddleware } from 'redux'
import loginReducer from './reducers/reducer_login'
import detailReducer from './reducers/reducer_detail'
import quarkReducer from './reducers/reducer_quark'
import quarkPropertiesReducer from './reducers/reducer_quark_properties'
import searchKeywordReducer from './reducers/reducer_search_keyword'

import thunk from 'redux-thunk'
const reducer = combineReducers({
    logged_in_user:   loginReducer,
    sub_gluon_side:   detailReducer,
    quark:            quarkReducer,
    quark_properties: quarkPropertiesReducer,
    search_keyword:   searchKeywordReducer,
})
const store = createStore(
    reducer,
    applyMiddleware(thunk)
)
export default store;
