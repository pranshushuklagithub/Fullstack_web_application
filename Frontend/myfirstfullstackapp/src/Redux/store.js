import { legacy_createStore as createStore,applyMiddleware,combineReducers } from "redux";
import thunk from "redux-thunk";
import { loginReducer,productReducer } from "./allreducer";
const combineReducer = combineReducers({
    loginReducer,
    productReducer
})

export const store = createStore(combineReducer,applyMiddleware(thunk));