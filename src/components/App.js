import "./app.css";
import Mode from "./top/Mode";
import Correlation from "./stacking/correlation/Correlation";
import Legecy from "./stacking/Legecy";
import PerTeam from "./stacking/PerTeam";
import Combination from "./stacking/Combination";
import Optimize from "./optimizer/Optimize";
import PlayersList from "./bottom/PlayersList";
import Bottom from "./bottom/Bottom";

import { Provider } from "react-redux";
import store from "../redux/store";

export default function App() {
  return (
    <Provider store={store}>
      <div className="app">
        <Mode />
        <Correlation />
        <Legecy />
        <PerTeam />
        <Combination />
        <Optimize />
        <PlayersList />
        <Bottom />
      </div>
    </Provider>
  );
}
