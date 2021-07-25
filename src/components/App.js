import React, {useState} from "react";
import "./app.css";
import Mode from "./top/Mode";
import ModeV2 from "./top/ModeV2";
import Correlation from "./stacking/correlation/Correlation";
import Legecy from "./stacking/Legecy";
import PerTeam from "./stacking/PerTeam";
import Combination from "./stacking/Combination";
import Optimize from "./optimizer/Optimize";
import PlayersList from "./bottom/PlayersList";
import PlayerListV2 from "./bottom/PlayerListV2";
import Bottom from "./bottom/Bottom";

import { Provider } from "react-redux";
import store from "../redux/store";
import PlayerListItemV3 from "./bottom/PlayersListV3";

export default function App() {

  const [playerList, setPlayerList] = useState(false);
  const [loadBottom, setLoadBottom] = useState(false);

  function handlePlayerList(val){
    setPlayerList(val);
  }

  function handleBottomLoad(val){
    setLoadBottom(val);
  }
  return (
    <Provider store={store}>
      <div className="app">
        {/* <Mode /> */}
        <ModeV2 allowPlayerList={handlePlayerList}/>
        {playerList && <Correlation />}
        {playerList && <Legecy />}
        {playerList && <PerTeam />}
        {playerList && <Combination />}
        {playerList && <Optimize allowBottom={handleBottomLoad}/>}
        {/* <PlayersList /> */}
        {/* {playerList && <PlayerListV2 />} */}
        {playerList && <PlayerListItemV3 />}
        {loadBottom && <Bottom />}
      </div>
    </Provider>
  );
}
