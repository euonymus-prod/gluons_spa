import { createStore, combineReducers, applyMiddleware } from 'redux'
import messageReducer from './reducers/message'
import quarkReducer from './reducers/reducer_quark'
import quarkPropertiesReducer from './reducers/reducer_quark_properties'
import gluonsReducer from './reducers/reducer_gluons'

import thunk from 'redux-thunk'
const reducer = combineReducers({
    messageReducer,
    quark:            quarkReducer,
    quark_properties: quarkPropertiesReducer,
    gluons:           gluonsReducer,
})
const store = createStore(
    reducer,
    applyMiddleware(thunk)
)
export default store;
