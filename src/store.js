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
import { reducer as formReducer } from 'redux-form'
import quarkTypesReducer from './reducers/reducer_quark_types'
import gluonTypesReducer from './reducers/reducer_gluon_types'
import addedQuarkReducer from './reducers/reducer_added_quark'
import addedGluonReducer from './reducers/reducer_added_gluon'
import deletedQuarkReducer from './reducers/reducer_deleted_quark'
import deletedGluonReducer from './reducers/reducer_deleted_gluon'
import editingQuarkReducer from './reducers/reducer_editing_quark'
import editingGluonReducer from './reducers/reducer_editing_gluon'
import contactFormReducer from './reducers/reducer_contact_form'
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
    quark_types:      quarkTypesReducer,
    gluon_types:      gluonTypesReducer,
    form:             formReducer,
    added_quark:      addedQuarkReducer,
    added_gluon:      addedGluonReducer,
    deleted_quark:    deletedQuarkReducer,
    deleted_gluon:    deletedGluonReducer,
    editing_quark:    editingQuarkReducer,
    editing_gluon:    editingGluonReducer,
    contact_form:     contactFormReducer,
    // --------------------------------------------------------
})
const store = createStore(
    reducer,
    applyMiddleware(thunk)
)
export default store;
