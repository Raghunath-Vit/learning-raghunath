import { createStore,combineReducers } from "redux";
import TodoReducers from "../reducers/TodoReducers";
import CountReducers from "../reducers/CountReducers";
let store=createStore(combineReducers({count:CountReducers,todos:TodoReducers}));
export default store;