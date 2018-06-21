import { createStore, combineReducers, applyMiddleware } from 'redux'
import loginReducer from './reducers/reducer_login'
import detailReducer from './reducers/reducer_detail'
import quarkReducer from './reducers/reducer_quark'
import quarkPropertiesReducer from './reducers/reducer_quark_properties'
import searchKeywordReducer from './reducers/reducer_search_keyword'

// ------------------------------------------------------------
import qtypePropertiesReducer from './reducers/reducer_qtype_properties'
import quarksReducer from './reducers/reducer_quarks'
import quarkName2Id from './reducers/reducer_quark_name2id'
// ------------------------------------------------------------

import thunk from 'redux-thunk'
const reducer = combineReducers({
    logged_in_user:   loginReducer,
    sub_gluon_side:   detailReducer,
    quark:            quarkReducer,
    quark_properties: quarkPropertiesReducer,
    search_keyword:   searchKeywordReducer,

    // --------------------------------------------------------
    qtype_properties: qtypePropertiesReducer,
    quarks:           quarksReducer,
    quark_name2id:    quarkName2Id,
    // --------------------------------------------------------
})
const store = createStore(
    reducer,
    applyMiddleware(thunk)
)
export default store;
