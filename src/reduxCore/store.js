import {combineReducers, createStore} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import {rickReducers} from "./reducers/rickReducers/rickReducers";

const rootReducer = combineReducers({
    rick: rickReducers
})

const composeEnhancers = composeWithDevTools({
    trace: true,
    traceLimit: 25
})

export const store = createStore(rootReducer, composeEnhancers())