import { createStore, combineReducers, applyMiddleware } from 'redux'
import loginReducer from './reducers/reducer_login'
import detailReducer from './reducers/reducer_detail'
import searchKeywordReducer from './reducers/reducer_search_keyword'

// ------------------------------------------------------------
import qtypePropertiesReducer from './reducers/reducer_qtype_properties'
import quarksReducer from './reducers/reducer_quarks'
import currentQuarkReducer from './reducers/reducer_current_quark'
import currentQuarksReducer from './reducers/reducer_current_quarks'
import pickupsReducer from './reducers/reducer_pickups'
// import gluonsReducer from './reducers/reducer_gluons'
// ------------------------------------------------------------

import thunk from 'redux-thunk'
const reducer = combineReducers({
    logged_in_user:   loginReducer,
    sub_gluon_side:   detailReducer,
    search_keyword:   searchKeywordReducer,

    // --------------------------------------------------------
    qtype_properties: qtypePropertiesReducer,
    quarks:           quarksReducer,
    current_quark:    currentQuarkReducer,
    current_quarks:   currentQuarksReducer,
    pickups:          pickupsReducer,
    // gluons:           gluonsReducer,
    // --------------------------------------------------------
})
const store = createStore(
    reducer,
    applyMiddleware(thunk)
)
export default store;
