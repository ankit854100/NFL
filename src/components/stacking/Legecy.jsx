import React, { useEffect, useRef, useState } from "react";
import Button from "react-bootstrap/Button";
import { Multiselect } from "multiselect-react-dropdown";
import ShowStacking from "./ShowStaking";
import {connect} from "react-redux"
import {setLegacy, setDeleteLegacy, setLegacyStackingArray, removeLegacyStackingArray} from "../../redux/stack/actionContainer"
import ShowLegacyStacking from "./ShowLegacyStacking";

// const players = [
//   "Patrick Mahomes",
//   "Tom Brady",
//   "Ezekiel Elliott",
//   "Saquon Barkley",
//   "Aaron Rodgers",
//   "Drew Brees"
// ];

const numbers = ["0", "1", "2", "3", "4"];
// const positions = ["QB", "RB", "WR", "TE", "DEF"];

const mapStateToProps = (state) => {
  return {
    total: state.table.total,
    legacy: state.stack.legacy,
    stackingLegacy: state.stack.stackingarray
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setLegacy: (value) => dispatch(setLegacy(value)),
    setDeleteLegacy: (value) => dispatch(setDeleteLegacy(value)),
    setLegacyStackingArray: (value) => dispatch(setLegacyStackingArray(value)),
    removeLegacyStackingArray: (value) => dispatch(removeLegacyStackingArray(value))
  };
};


function Legacy(props) {
  const [legecy, setLegecy] = useState(false);
  const [position, setPosition] = useState("");
  const [player, setPlayer] = useState("select player");
  const [radio, setRadio] = useState("position");
  const [amount, setAmount] = useState("no_less_than");
  const [number, setNumber] = useState("0");
  const [team, setTeam] = useState("same");
  const [positionMultiSelect, setPositionMultiSelect] = useState([]);
  const [playerMultiSelect, setPlayerMultiSelect] = useState([]);
  const [stackingArray, setStackingArray] = useState([]);
  const [players, setPlayers] = useState([]);
  const [multiSelectPlayers, setMultiSelectPlayers] = useState([]);
  const [positions, setPositions] = useState(["QB", "RB", "WR", "TE", "DEF"]);

  const positionMultiSelectRef = useRef();
  const playerMultiSelectRef = useRef();

  function handleTeam(e) {
    setTeam(e.target.value);
  }

  function handleNumber(e) {
    setNumber(e.target.value);
  }

  function handleAmount(e) {
    setAmount(e.target.value);
  }

  function handleLegecy() {
    setLegecy(!legecy);
  }

  function handlePosition(e) {
    setPosition(e.target.value);

    // setPlayer("select player");
    setPlayerWithPosition(e.target.value);
    setMultiSelectPlayers(
      props.total.map((p) => p.name)
    );
    setPositions(positions.filter((p) => p !== e.target.value));
    // setPlayerMultiSelect([]); 
  }

  function setPlayerWithPosition(pos){
    setPlayers([]);
    for(let i = 0; i < props.total.length; i++){
      if(props.total[i].position === pos){
        setPlayers((prev) => {
          return [...prev, props.total[i].name]
        });
      }
    }
  }

  function handlePlayer(e) {
    setPlayer(e.target.value);
    // setPlayerMultiSelect([]);
  }

  function handleRadio(e) {
    setRadio(e.target.value);
  }

  function onSelectPosition(selectedList, selectedItem) {
    setPositionMultiSelect([...positionMultiSelect, selectedItem]);
  }

  function onRemovePosition(selectedList, removedItem) {
    const list = positionMultiSelect.filter((p) => p !== removedItem);
    setPositionMultiSelect(list);
  }

  function onSelectPlayer(selectedList, selectedItem) {
    setPlayerMultiSelect([...playerMultiSelect, selectedItem]);
  }

  function onRemovePlayer(selectedList, removedItem) {
    const list = playerMultiSelect.filter((p) => p !== removedItem);
    setPlayerMultiSelect(list);
  }

  function handleAddRule(){
    let output;
    if(radio === "position"){
      // setPlayerMultiSelect([]);
      const text = "Select " + position + " " + player + " with " + amount + " " + number + " " + positionMultiSelect.map((pos) => pos) + " from the " + team;
      const team_flag = team === "same" ? 1: 0;
      const different_flag = team === "opposite" ? 1: 0;
      output = {"position": position, "player": player, "position_flag": radio === "position" ? 1: 0, "player_flag": radio === "player" ? 1: 0, "type1": amount, "num_of_players": parseInt(number), "player_positions": positionMultiSelect.map((pos) => pos), "players_list": [], "same_team": team_flag, "different_team": different_flag};
      setStackingArray([...stackingArray, {text: text, output: output}]);
      props.setLegacyStackingArray({text: text, output: output});
      // console.log(stackingArray);
      props.setLegacy(output);
      resetValuesPositions();
    }
    else{
      // setPositionMultiSelect([]);
      // console.log(playerMultiSelect.length, number);
      if(playerMultiSelect.length !== parseInt(number)){
        alert("please select appropriate number of players or clear the selected value and choose again");
      }
      else if(playerMultiSelect.includes(player)){
        alert("Choose different players or clear the selected value and choose again");
      }
      else{
        const team_flag = team === "same" ? 1: 0;
        const different_flag = team === "opposite" ? 1: 0;
        output = {"position": position, "player": player,"position_flag": radio === "position" ? 1: 0, "player_flag": radio === "player" ? 1: 0, "type1": amount, "num_of_players": parseInt(number), "player_positions": [], "players_list": playerMultiSelect.map((pos) => pos), "same_team": team_flag, "different_team": different_flag};
        const text = "Select " + position + " " + player + " with " + amount + " " + number + " " + playerMultiSelect.map((pos) => pos);
        setStackingArray([...stackingArray, {text: text, output: output}]);
        // console.log(stackingArray);
        props.setLegacy(output);
        resetValuesPlayers();
      }
    }
    // console.log(output);
  }

  function resetValuesPositions(){
    positionMultiSelectRef.current.resetSelectedValues();
    setPosition("");
    setPlayer("select player");
    setRadio("position");
    setAmount("no_less_than");
    setNumber("0");
    setTeam("same");
    setPositionMultiSelect([]);
    setPlayerMultiSelect([]);
    setPlayers([]);
    setPositions(["QB", "RB", "WR", "TE", "DEF"]);
  }

  function resetValuesPlayers(){
    playerMultiSelectRef.current.resetSelectedValues();
    setPosition("");
    setPlayer("select player");
    setRadio("position");
    setAmount("no_less_than");
    setNumber("0");
    setTeam("same");
    setPositionMultiSelect([]);
    setPlayerMultiSelect([]);
    setPlayers([]);
    setPositions(["QB", "RB", "WR", "TE", "DEF"]);
  }

  function deleteFromStackingArray(index){
    // stackingArray.splice(index, 1);
    const spliced = stackingArray.slice(0, index.id).concat(stackingArray.slice(index.id + 1, stackingArray.length));
    // props.removeLegacyStackingArray(index.id);
    props.setDeleteLegacy(index.output);
    // console.log(index, spliced);
    setStackingArray(spliced);
  }

  return (
    <React.Fragment>
      <div>
        <div className="stacking">
          {legecy ? (
            <div>
              <div>
                <span
                  className="stacking-filter"
                  style={{ float: "right" }}
                  onClick={handleLegecy}
                >
                  <i className="fa fa-times-circle"></i> CLOSE STACKING OPTIONS
                </span>
              </div>
              <br></br>

              <div className="stacking-wrapper">
                <div className="stacking-wrapper-top">
                  <h3>CREATE NEW RULE</h3>
                </div>

                <div className="stacking-wrapper-bottom first">
                  <strong className="first-text">Stack</strong>

                  <select
                    className="dropdown position"
                    value={position}
                    onChange={handlePosition}
                  >
                    <option value="" disabled>Position</option>
                    {positions.map((pos) => {
                      return <option value={pos}>{pos}</option>;
                    })}
                  </select>

                  <select
                    className="dropdown"
                    value={player}
                    onChange={handlePlayer}
                  >
                    <option value="select player" disabled>select player</option>
                    {players.map((player) => {
                      return <option value={player}>{player}</option>;
                    })}
                  </select>

                  <strong className="first-text">with</strong>
                </div>

                <div className="stacking-wrapper-bottom second">
                  <label className="radio-wrapper">
                    <input
                      type="radio"
                      value="position"
                      checked={radio === "position"}
                      onChange={handleRadio}
                    />
                    Position
                  </label>
                  <label className="radio-wrapper">
                    <input
                      type="radio"
                      value="player"
                      checked={radio === "player"}
                      onChange={handleRadio}
                    />
                    Player
                  </label>

                  <select
                    className="dropdown"
                    value={amount}
                    onChange={handleAmount}
                  >
                    <option value="no_less_than">No less than</option>
                    <option value="exactly">Exactly</option>
                    <option value="more_than">More than</option>
                  </select>

                  <select
                    className="dropdown"
                    value={number}
                    onChange={handleNumber}
                  >
                    {numbers.map((num) => {
                      return <option value={num}>{num} player</option>;
                    })}
                  </select>

                  <strong className="first-text">of</strong>

                  {radio === "position" &&
                    <div className="multiselect-wrapper">
                      <Multiselect
                        ref= {positionMultiSelectRef}
                        options={positions}
                        onSelect={onSelectPosition}
                        onRemove={onRemovePosition}
                        isObject={false}
                      />
                    </div>
                  }

                  {radio === "player" && 
                    <div className="multiselect-wrapper">
                      <Multiselect
                        ref= {playerMultiSelectRef}
                        options={multiSelectPlayers}
                        onSelect={onSelectPlayer}
                        onRemove={onRemovePlayer}
                        isObject={false}
                      />
                    </div>
                  }

                  {radio === "position" && <strong className="first-text">from</strong>}

                  {radio === "position" && 
                    <select
                      className="dropdown"
                      value={team}
                      onChange={handleTeam}
                    >
                      <option value="same">same team</option>
                      <option value="opposite">opposite team</option>
                    </select>}

                  <Button variant="primary" className="rule-button" onClick={handleAddRule}>
                    ADD RULE
                  </Button>
                </div>
              </div>
              {stackingArray.length > 0 ? 
                <div className="showstacking-container">
                  {stackingArray.map((val, index) => {
                    return <ShowStacking id={index} text={val} onDelete={deleteFromStackingArray}/>
                  })} 
                </div> 
              : null}
            </div>
          ) : (
            <div>
              <span className="stacking-filter" onClick={handleLegecy}>
                <i className="fa fa-cog"></i> LEGECY STACKING SYSTEM
              </span>
            </div>
          )}
        </div>
        <style jsx>{`
          .first-text {
            font-size: 15px;
            line-height: 20px;
            font-weight: 700;
            display: inline-block;
            vertical-align: top;
            margin: 10px 10px 0 0;
          }
        `}</style>
      </div>
    </React.Fragment>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Legacy);