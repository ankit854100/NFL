import React, {useEffect, useState} from "react";
import SecondaryPlayerPanel from "./SecondaryPlayerPanel";
import { connect } from "react-redux";
import {setCorrelationArray, setDeleteCorrelation} from "../../../redux/stack/actionContainer";
import Button from "react-bootstrap/Button";

const mapStateToProps = (state) => {
  return {
    total: state.table.total,
    games: state.gamebox.games
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setCorrelationArray: (value) => dispatch(setCorrelationArray(value)),
    setDeleteCorrelation: (value) => dispatch(setDeleteCorrelation(value))
  };
};

const playersPosition = ["QB", "TE", "RB"]

function Secondary(props) {

  const [stackNumber, setStackNumber] = useState("none");
  const [correlationBoost, setcorrelationBoost] = useState(false);
  const [teamGame, setTeamGame] = useState("team");
  const [QBPlayer, setQBPlayer] = useState("none");
  const [team, setTeam] = useState("");
  const [opp, setOpp] = useState("");
  const [numOfLineups, setNumOfLineups] = useState(1);

  const [RBOppWRTE, setRBOppWRTE] = useState(true);
  const [WROppWRTE, setWROppWRTE] = useState(true);
  const [RBWRsame, setRBWRsame] = useState(true);
  const [RBDEFsame, setRBDEFsame] = useState(true);
  const [WRTEsameWRTE, setWRTEsameWRTE] = useState(true);

  const [noLess1, setNoLess1] = useState("1");
  const [noMore1, setNoMore1] = useState("3");
  const [noLess2, setNoLess2] = useState("1");
  const [noMore2, setNoMore2] = useState("3");
  // const [stateID,  setStateID] = useState({});

  function handleNumOfLineups(e){
    setNumOfLineups(e.target.value);
  }

  function handleRBOppWRTE(){
    setRBOppWRTE(!RBOppWRTE);
  }

  function handleWROppWRTE(){
    setWROppWRTE(!WROppWRTE);
  }

  function handleRBWRsame(){
    setRBWRsame(!RBWRsame);
  }

  function handleRBDEFsame(){
    setRBDEFsame(!RBDEFsame);
  }

  function handleWRTEsameWRTE(){
    setWRTEsameWRTE(!WRTEsameWRTE);
  }

  function handleStackNumber(e){
    setStackNumber(e.target.value);
  }

  function handleCorrelationBoost(){
    if(correlationBoost === false){
      setcorrelationBoost(true);
    }
    else{
      setcorrelationBoost(false);
    }
  }

  function handleTeamGame(e){
    setTeamGame(e.target.value);
  }

  function handleQBPlayerSelected(e){
    setQBPlayer(e.target.value);

    for(let i = 0; i < props.total.length; i++){
      if(e.target.value === props.total[i].name){
        setTeam(props.total[i].team);

        for(let j = 0; j < props.games.length; j++){
          if(props.games[j].home_team === props.total[i].team){
            setOpp(props.games[j].away_team);
          }
          else if(props.games[j].away_team === props.total[i].team){
            setOpp(props.games[j].home_team);
          }
        }
        break;
      }
    }
  }

  function noLess1Handler(e){
    setNoLess1(e.target.value);
  }

  function noMore1handler(e){
    setNoMore1(e.target.value);
  }

  function noLess2Handler(e){
    setNoLess2(e.target.value);
  }

  function noMore2Handler(e){
    setNoMore2(e.target.value);
  }

  function crossDeleteHandler(){
    props.onDelete();
    // props.onDelete(props.id);
    props.setDeleteCorrelation();
    // props.setDeleteCorrelation(stateID);

  }

  function addValues(){
    if(QBPlayer === "none"){
      alert("Select a player");
    }
    else{
      const team_flag = teamGame === "team" ? 1: 0;
      const game_flag = teamGame === "game" ? 1: 0;
      const first_option = RBOppWRTE === true ? 1: 0;
      const second_option = WROppWRTE === true? 1: 0;
      const third_option = RBWRsame === true? 1: 0;
      const fourth_option = RBDEFsame === true? 1: 0;
      const five_option = WRTEsameWRTE === true? 1: 0;
      const output = {
                      "game": game_flag,
                      "Team": team_flag,
                      "player": QBPlayer,
                      "min_lineups": parseInt(numOfLineups),
                      "flags": [first_option, second_option, third_option, fourth_option, five_option],
                      "team_constraint": {"No_less_than": parseInt(noLess1),"No_more_than": parseInt(noMore1)},
                      "opp_team_constraint": {"No_less_than": parseInt(noLess2), "No_more_than": parseInt(noMore2)}
                    };

      // setStateID(output);
      props.setCorrelationArray(output);
    }
    // console.log(output);
  }


  return (
    <div className="secondary">
      {/* <div> */}
      <div>
        <strong style={{ marginRight: "14px" }}>Secondary Stack:</strong>{" "}
        <span className="secondary-radio-wrapper">
          <input 
            type="radio" 
            value="none"
            checked= {stackNumber === "none"}
            onChange={handleStackNumber}
          />
          <span>None</span>
        </span>
        <span className="secondary-radio-wrapper">
          <input 
            type="radio" 
            value="1"
            checked={stackNumber === "1"}
            onChange={handleStackNumber}  
            />
          <span>1</span>
        </span>
        <span className="secondary-radio-wrapper">
          <input 
            type="radio" 
            value="2"
            checked={stackNumber === "2"}
            onChange={handleStackNumber}  
            />
          <span>2</span>
        </span>
        <span className="secondary-cross-container" onClick={crossDeleteHandler}>
          <i class="fa fa-times-circle"></i>
        </span>
      </div>
      <div className="secondary-list">
        <div>
          <input type="checkbox" checked={RBOppWRTE} onChange={handleRBOppWRTE}/>{" "}
          <strong>RB + Opposing team pass catcher (WR,TE)</strong>
        </div>
        <div>
          <input type="checkbox" checked={WROppWRTE} onChange={handleWROppWRTE}/>{" "}
          <strong>WR + Opposing team pass catcher (WR,TE)</strong>
        </div>
        <div>
          <input type="checkbox" checked={RBWRsame} onChange={handleRBWRsame}/> 
          <strong>RB + WR same team</strong>
        </div>
        <div>
          <input type="checkbox" checked={RBDEFsame} onChange={handleRBDEFsame}/> 
          <strong>RB + DEF same team</strong>
        </div>
        <div>
          <input type="checkbox" checked={WRTEsameWRTE} onChange={handleWRTEsameWRTE}/>{" "}
          <strong>Pass catcher (WR,TE) + pass catcher (WR,TE) same team</strong>
        </div>
      </div>
      <div>
        <input 
          type="checkbox" 
          checked={correlationBoost}
          onChange={handleCorrelationBoost}
          style={{ marginRight: "0.25rem" }} />
        <strong>
          Correlation Boost <i class="fa fa-info-circle"></i>
        </strong>
        <div className="secondary-bottom">
          <div>
            <strong>Stack</strong>
            {"  "}
            <strong className="correlation-position-wrapper">QB</strong>
            <select
              className="dropdown"
              onChange={handleQBPlayerSelected}
              style={{ color: "#000", fontSize: "13px", width: "18.75rem" }}
            >
              <option value="none" disabled selected>
                select players
              </option>
              {props.total.map((item, index) => {
                if(item.position === "QB"){
                  return <option key={index} value={item.name}>{item.name}</option>
                }
                else{
                  return null;
                }
              })}
            </select>
            <strong>in min</strong>
            <input
              type="text"
              value={numOfLineups}
              onChange={handleNumOfLineups}
              className="correlation-position-wrapper"
              style={{ backgroundColor: "#fff", width: "64px" }}
            />
            <strong>lineups</strong>
            <div className="team-game-wrapper">
              <span className="secondary-radio-wrapper">
                <input 
                  type="radio" 
                  value="team"
                  checked={teamGame === "team"}
                  onChange={handleTeamGame}
                  />
                <span>Team</span>
              </span>
              <span className="secondary-radio-wrapper">
                <input 
                  type="radio"
                  value="game"
                  checked={teamGame === "game"}
                  onChange={handleTeamGame}  
                />
                <span>Game</span>
              </span>
            </div>
          </div>
          <div>
            <strong>No less than</strong>
            <select
              className="dropdown"
              style={{ fontSize: "13px", width: "8rem", marginLeft: "10px" }}
              value={noLess1}
              onChange={noLess1Handler}
            >
              <option value="1" selected>1 player</option>
              <option value="2">2 player</option>
              <option value="3">3 player</option>
            </select>
            <strong>No more than</strong>
            <select
              className="dropdown"
              style={{ fontSize: "13px", width: "8rem", marginLeft: "10px" }}
              value={noMore1}
              onChange={noMore1handler}
            >
              <option value="1">1 player</option>
              <option value="2">2 player</option>
              <option value="3" selected>3 player</option>
            </select>
            <strong>of</strong>
            <strong
              className="correlation-position-wrapper"
              style={{ marginRight: "0" }}
            >
              QB
            </strong>
            <strong
              className="correlation-position-wrapper"
              style={{ marginLeft: "0", marginRight: "0" }}
            >
              TE
            </strong>
            <strong
              className="correlation-position-wrapper"
              style={{ marginLeft: "0" }}
            >
              RB
            </strong>
            <strong>from the Same Team</strong>
          </div>
          {teamGame === "game" &&
          <div>
            <strong>No less than</strong>
            <select
              className="dropdown"
              style={{ fontSize: "13px", width: "8rem", marginLeft: "10px" }}
              value={noLess2}
              onChange={noLess2Handler}
            >
              <option value="1" selected>1 player</option>
              <option value="2">2 player</option>
              <option value="3">3 player</option>
            </select>
            <strong>No more than</strong>
            <select
              className="dropdown"
              style={{ fontSize: "13px", width: "8rem", marginLeft: "10px" }}
              value={noMore2}
              onChange={noMore2Handler}
            >
              <option value="1">1 player</option>
              <option value="2">2 player</option>
              <option value="3" selected>3 player</option>
            </select>
            <strong>of</strong>
            <strong
              className="correlation-position-wrapper"
              style={{ marginRight: "0" }}
            >
              QB
            </strong>
            <strong
              className="correlation-position-wrapper"
              style={{ marginLeft: "0", marginRight: "0" }}
            >
              TE
            </strong>
            <strong
              className="correlation-position-wrapper"
              style={{ marginLeft: "0" }}
            >
              RB
            </strong>
            <strong>from the Opposite Team</strong>
          </div>
          }
          <div className="secondary_sameTeam">
            <strong>{team}</strong>
            <div className="secondaryPlayerPanel_container">
              {props.total.map((data, index) => {
                  if(data.team === team && playersPosition.includes(data.position)){
                    return <SecondaryPlayerPanel key={index} data={data}/>
                    {/* console.log(data); */}
                  }
                  else return null;
              })}
            </div>
          </div>
          {teamGame === "game" &&
            <div className="secondary_oppositeTeam">
              <strong>{opp}</strong>
              <div className="secondaryPlayerPanel_container">
                {props.total.map((data, index) => {
                  if(data.team === opp && playersPosition.includes(data.position)){
                    return <SecondaryPlayerPanel key={index} data={data} />
                  }
                })}
              </div>
            </div>
          }
        </div>
        <Button varient="primary" onClick={addValues}>add secondary</Button>
        {/* </div>s */}
      </div>
      <style jsx>{`
        .secondary {
          padding: 1rem 0;
          position: relative;
          // border-top: 1px solid #707070;
        }

        .secondary-radio-wrapper {
          margin: 13px 14px 0 0;
          font-size: 13px;
        }

        .secondary-radio-wrapper input {
          margin-right: 3px;
        }

        .secondary-cross-container {
          position: absolute;
          right: 0;
          font-size: 20px;
          cursor: pointer;
        }

        .secondary-cross-container .fa:hover {
          color: red;
        }

        .secondary-list {
          padding: 1rem 0;
          font-size: 13px;
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
        }

        .secondary-list input {
          margin-right: 0.25rem;
        }

        .secondary-list div {
          display: flex;
          align-items: baseline;
          padding-top: 0.5rem;
          // padding-bottom: 0.5rem;
          padding-right: 1rem;
        }

        .secondary-bottom {
          padding: 1rem 0;
        }

        .team-game-wrapper {
          display: inline-block;
          margin-left: 80px;
        }

        .secondaryPlayerPanel_container{
          display: flex;
          flex-wrap: wrap;
        }
      `}</style>
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Secondary)
