import { createStore, combineReducers, applyMiddleware } from 'redux'
import detailReducer from './reducers/reducer_detail'
import quarkReducer from './reducers/reducer_quark'
import quarkPropertiesReducer from './reducers/reducer_quark_properties'
import gluonsReducer from './reducers/reducer_gluons'

import thunk from 'redux-thunk'
const reducer = combineReducers({
    sub_gluon_side:   detailReducer,
    quark:            quarkReducer,
    quark_properties: quarkPropertiesReducer,
})
const store = createStore(
    reducer,
    applyMiddleware(thunk)
)
export default store;
