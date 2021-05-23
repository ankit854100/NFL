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

const numbers = ["1", "1", "2", "4"];

export default function () {
  const [combination, setCombination] = useState(false);
  const [number1, setNumber1] = useState("0");
  const [number2, setNumber2] = useState("1");
  const [inAnd, setInAnd] = useState("in");
  const [lineup, setLineUp] = useState("min");
  const [textInput, setInput] = useState(1);
  const [stackingArray, setStackingArray] = useState([]);
  const [player, setPlayer] = useState([]);

  function handleTextInput(e) {
    setInput(e.target.value);
  }

  function handleLineUps(e) {
    setLineUp(e.target.value);
  }

  function handleInAnd(e) {
    setInAnd(e.target.value);
  }

  function handleNUmber2(e) {
    setNumber2(e.target.value);
  }

  function handleNumber1(e) {
    setNumber1(e.target.value);
  }

  function handleCombination() {
    setCombination(!combination);
  }

  function handleAddRule(){
    let value = "Stack between " + number1 + " and " + number2 +" of " + player.map((p) => p) + " in ";
    if(lineup === "min"){
      value += "min " + textInput + " lineups.";
    }
    else{
      value += "all lineups";
    }
    
    setStackingArray([...stackingArray, value]);
    console.log(stackingArray);
    
  }

  function onSelect(selectedList, selectedItem) {
    setPlayer([...player, selectedItem]);
  }

  function onRemove(selectedList, removedItem) {
    const list = player.filter((p) => p === removedItem);
    setPlayer(list);
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
          {combination ? (
            <div>
              <div>
                <span
                  className="stacking-filter"
                  style={{ float: "right" }}
                  onClick={handleCombination}
                >
                  <i className="fa fa-times-circle"></i> CLOSE STACKING OPTIONS
                </span>
              </div>
              <br></br>

              <div className="stacking-wrapper">
                <div className="stacking-wrapper-top">
                  <h3>CREATE NEW RULE</h3>
                </div>

                <div
                  className="stacking-wrapper-bottom"
                  style={{ padding: "1rem" }}
                >
                  <strong className="first-text">Stack between</strong>

                  <select
                    className="dropdown"
                    value={number1}
                    onChange={handleNumber1}
                  >
                    <option value="0">0</option>
                    {numbers.map((num) => {
                      return <option value={num}>{num}</option>;
                    })}
                  </select>

                  <strong className="first-text">to</strong>

                  <select
                    className="dropdown"
                    value={number2}
                    onChange={handleNUmber2}
                  >
                    {numbers.map((num) => {
                      return <option value={num}>{num}</option>;
                    })}
                  </select>

                  <strong className="first-text">of</strong>

                  <div className="multiselect-wrapper">
                    <Multiselect options={players} isObject={false} onSelect={onSelect} onRemove={onRemove} />
                  </div>
                  <select
                    className="dropdown"
                    value={inAnd}
                    onChange={handleInAnd}
                  >
                    <option value="in">in</option>
                    <option value="and">and</option>
                  </select>

                  <label className="radio-wrapper">
                    <input
                      type="radio"
                      value="min"
                      checked={lineup === "min"}
                      onChange={handleLineUps}
                    />{" "}
                    min
                  </label>

                  <input
                    className="text-input"
                    type="text"
                    value={textInput}
                    onChange={handleTextInput}
                  />

                  <strong className="first-text">lineups</strong>

                  <label className="radio-wrapper">
                    <input
                      type="radio"
                      value="all"
                      checked={lineup === "all"}
                      onChange={handleLineUps}
                    />{" "}
                    all lineups
                  </label>

                  <Button varient="primary" className="rule-button" onClick={handleAddRule}>
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
              <span className="stacking-filter" onClick={handleCombination}>
                <i className="fa fa-cog"></i> PLAYER COMBINATION RULES
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

          .text-input {
            box-shadow: none;
            background: #fff;
            font-size: 13px;
            line-height: 18px;
            width: 100%;
            margin: 0;
            color: #888;
            height: 40px;
            padding: 10px;
            border: 1px solid #ddd;
            transition: all 0.2s ease;
            max-width: 64px;
            margin: 0 10px 10px 0;
          }

          .showstacking-container{
            display: flex;
            flex-wrap: wrap;
          }
        `}</style>
      </div>
    </React.Fragment>
  );
}
