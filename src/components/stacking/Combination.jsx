import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import { Multiselect } from "multiselect-react-dropdown";
import ShowStacking from "./ShowStaking";
import { connect } from "react-redux";
import { propTypes } from "react-bootstrap/esm/Image";
import {setCombination, setDeleteCombination} from "../../redux/stack/actionContainer";

// const players = [
//   "Patrick Mahomes",
//   "Tom Brady",
//   "Ezekiel Elliott",
//   "Saquon Barkley",
//   "Aaron Rodgers",
//   "Drew Brees"
// ];

const numbers = ["1", "2", "3", "4"];

const mapStateToProps = (state) => {
  return {
    total: state.table.total,
    numOfLineups: state.optimizer.numOfLineups
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setCombination: (value) => dispatch(setCombination(value)),
    setDeleteCombination: (value) => dispatch(setDeleteCombination(value))
  };
};

function Combination(props) {
  const [combination, setCombination] = useState(false);
  const [number1, setNumber1] = useState("0");
  const [number2, setNumber2] = useState("1");
  const [number3, setNumber3] = useState("0");
  const [number4, setNumber4] = useState("1");
  const [inAnd, setInAnd] = useState("in");
  const [lineup, setLineUp] = useState("min");
  const [textInput, setInput] = useState(1);
  const [stackingArray, setStackingArray] = useState([]);
  const [player1, setPlayer1] = useState([]);
  const [player2, setPlayer2] = useState([]);
  const [players, setPlayers] = useState();

  useEffect(() => {
      let arr = props.total.map((player) => {
        return player.name}
        );
      
      setPlayers(arr);
  }, [props.total]);

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

  function handleNumber3(e){
    setNumber3(e.target.value);
  }

  function handleNumber4(e){
    setNumber4(e.target.value);
  }

  function handleCombination() {
    setCombination(!combination);
  }

  function handleAddRule(){
    if(inAnd === "and"){
      callWhenAnd();
    }
    else if(inAnd === "in"){
      callWhenIn();
    }
    
  }

  function callWhenIn(){
    // console.log(player1.length, number2);
    if(player1.length !== parseInt(number2)){
      alert("please choose appropriate number of players");
    }
    else{
      let value = "Stack between " + number1 + " and " + number2 +" of " + player1.map((p) => p);
      let num_of_lineups = lineup;
      if(lineup === "min"){
        value += "min " + textInput + " lineups.";
      }
      else{
        value += "all lineups";
        num_of_lineups = props.numOfLineups;
      }
      let arr = {"items": 1, "mini1": parseInt(number1), "maxi1": parseInt(number2), "player1": player1, "mini2": parseInt(number3), "maxi2": parseInt(number3), "player2": player2, "num_line_ups": parseInt(number3)};
      setStackingArray([...stackingArray, {text: value, output: arr}]);
      props.setCombination(arr);
      // console.log(arr);
    }
  }

  function callWhenAnd(){
    if(player1.length < number2 || player2.length < number4 || player1.length > number2 || player2.length > number4){
      alert("please select appropriate number of players");
    }
    else if(checkArray(player1, player2)){
      alert("Choose different players");
    }
    else{
      let value = "Stack between " + number1 + " and " + number2 +" of " + player1.map((p) => p) + " and between " + number3 + " and " + number4 +" of " + player2.map((p) => p);
      let num_of_lineups = textInput > props.numOfLineups ? props.numOfLineups: textInput;
      if(lineup === "min"){
        value += "min " + textInput + " lineups.";
      }
      else{
        value += "all lineups";
        num_of_lineups = props.numOfLineups;
      }
      let arr = {"items": 2, "mini1": parseInt(number1), "maxi1": parseInt(number2), "player1": player1, "mini2": parseInt(number3), "maxi2": parseInt(number4), "player2": player2, "num_line_ups": parseInt(num_of_lineups)};
      setStackingArray([...stackingArray, {text: value, output: arr}]);
      props.setCombination(arr);
      // console.log(arr);
    }
  }

  function checkArray(arr1, arr2){
    const val = arr1.some(item => arr2.includes(item))
    return val;
  }

  function onSelect1(selectedList, selectedItem) {
    setPlayer1([...player1, selectedItem]);
  }

  function onRemove1(selectedList, removedItem) {
    const list = player1.filter((p) => p !== removedItem);
    setPlayer1(list);
  }

  function onSelect2(selectedList, selectedItem) {
    setPlayer2([...player2, selectedItem]);
  }

  function onRemove2(selectedList, removedItem) {
    const list = player2.filter((p) => p !== removedItem);
    setPlayer2(list);
  }

  function deleteFromStackingArray(index){
    // stackingArray.splice(index, 1);
    const spliced = stackingArray.slice(0, index.id).concat(stackingArray.slice(index.id + 1, stackingArray.length));
    // console.log(index, spliced);
    props.setDeleteCombination(index.output); 
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
                    <Multiselect options={players} isObject={false} onSelect={onSelect1} onRemove={onRemove1} />
                  </div>
                  <select
                    className="dropdown"
                    value={inAnd}
                    onChange={handleInAnd}
                  >
                    <option value="in">in</option>
                    <option value="and">and</option>
                  </select>

                  {/* again  */}
                  {inAnd === "and" && 
                    <React.Fragment>
                      <strong className="first-text">between</strong>
                      <select
                        className="dropdown"
                        value={number3}
                        onChange={handleNumber3}
                      >
                        <option value="0">0</option>
                        {numbers.map((num) => {
                          return <option value={num}>{num}</option>;
                        })}
                      </select>

                      <strong className="first-text">to</strong>

                      <select
                        className="dropdown"
                        value={number4}
                        onChange={handleNumber4}
                      >
                        {numbers.map((num) => {
                          return <option value={num}>{num}</option>;
                        })}
                      </select>

                      <strong className="first-text">of</strong>

                      <div className="multiselect-wrapper">
                        <Multiselect options={players} isObject={false} onSelect={onSelect2} onRemove={onRemove2} />
                      </div>
                    </React.Fragment>
                  }

                  {/* again end */}

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

export default connect(mapStateToProps, mapDispatchToProps)(Combination);