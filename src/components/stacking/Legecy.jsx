import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import { Multiselect } from "multiselect-react-dropdown";
import ShowStacking from "./ShowStaking";

const players = [
  "Patrick Mahomes",
  "Tom Brady",
  "Ezekiel Elliott",
  "Saquon Barkley",
  "Aaron Rodgers",
  "Drew Brees"
];

const numbers = ["0", "1", "2", "3", "4"];
const positions = ["QB", "RB", "WR", "TE", "D"];

export default function () {
  const [legecy, setLegecy] = useState(false);
  const [position, setPosition] = useState("");
  const [player, setPlayer] = useState(players[0]);
  const [radio, setRadio] = useState("position");
  const [amount, setAmount] = useState("no less than");
  const [number, setNumber] = useState("0");
  const [team, setTeam] = useState("same");
  const [positionMultiSelect, setPositionMultiSelect] = useState([]);
  const [playerMultiSelect, setPlayerMultiSelect] = useState([]);
  const [stackingArray, setStackingArray] = useState([]);

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
  }

  function handlePlayer(e) {
    setPlayer(e.target.player);
    
  }

  function handleRadio(e) {
    setRadio(e.target.value);
  }

  function onSelectPosition(selectedList, selectedItem) {
    setPositionMultiSelect([...positionMultiSelect, selectedItem]);
  }

  function onRemovePosition(selectedList, removedItem) {
    const list = positionMultiSelect.filter((p) => p === removedItem);
    setPositionMultiSelect(list);
  }

  function onSelectPlayer(selectedList, selectedItem) {
    setPlayerMultiSelect([...playerMultiSelect, selectedItem]);
  }

  function onRemovePlayer(selectedList, removedItem) {
    const list = playerMultiSelect.filter((p) => p === removedItem);
    setPlayerMultiSelect(list);
  }

  function handleAddRule(){
    if(radio === "position"){
      // setPlayerMultiSelect([]);
      const text = "Select " + position + " " + player + " with " + amount + " " + number + " " + positionMultiSelect.map((pos) => pos) + " from the " + team;
      setStackingArray([...stackingArray, text]);
      console.log(stackingArray);
    }
    else{
      // setPositionMultiSelect([]);
      const text = "Select " + position + " " + player + " with " + amount + " " + number + " " + playerMultiSelect.map((pos) => pos);
      setStackingArray([...stackingArray, text]);
      console.log(stackingArray);
    }
  }

  function deleteFromStackingArray(index){
    // stackingArray.splice(index, 1);
    const spliced = stackingArray.slice(0, index).concat(stackingArray.slice(index + 1, stackingArray.length));
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
                    <option value="">Position</option>
                    {positions.map((pos) => {
                      return <option value={pos}>{pos}</option>;
                    })}
                  </select>

                  <select
                    className="dropdown"
                    value={player}
                    onChange={handlePlayer}
                  >
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
                    <option value="no less than">No less than</option>
                    <option value="exactly">Exactly</option>
                    <option value="more than">More than</option>
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
                        options={players}
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
