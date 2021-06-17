import { combineReducers } from "redux";
import TableReducer from "./PlayerTableItem/reducer";
import OptimizerReducer from "./optimizer/reducer";
import GameReducer from "./GameBox/reducer";
import BottomReducer from "./Bottom/reducer";

const rootReducer = combineReducers({
  table: TableReducer,
  optimizer: OptimizerReducer,
  gamebox: GameReducer,
  bottom: BottomReducer
});

export default rootReducer;
