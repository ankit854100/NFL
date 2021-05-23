import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
// import TableItemReducer from "./PlayerTableItem/reducer";
import rootReducer from "./rootReducer";

const store = createStore(rootReducer, composeWithDevTools());

export default store;
