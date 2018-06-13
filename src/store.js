import { createStore, combineReducers, applyMiddleware } from 'redux'
import messageReducer from './reducers/message'
import quarkReducer from './reducers/reducer_quark'
import thunk from 'redux-thunk'
const reducer = combineReducers({
    messageReducer,
    quark: quarkReducer
})
const store = createStore(
 reducer,
 applyMiddleware(thunk)
)
export default store;
