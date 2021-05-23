import { combineReducers } from "redux";
import TableReducer from "./PlayerTableItem/reducer";
import OptimizerReducer from "./optimizer/reducer";

const rootReducer = combineReducers({
  table: TableReducer,
  optimizer: OptimizerReducer
});

export default rootReducer;
