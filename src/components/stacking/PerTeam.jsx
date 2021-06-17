import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import "./stacking.css";
import ShowStacking from "./ShowStaking";

const numbers = ["1", "2", "3", "4"];
const teams = ["others", "GB", "LAR", "BUF", "BAL"];

export default function () {
  const [perTeam, setPreTeam] = useState(false);
  const [amount, setAmount] = useState("atmost");
  const [number, setNumber] = useState("1");
  const [team, setTeam] = useState("others");
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

  function handlePerTeam() {
    setPreTeam(!perTeam);
  }

  function handleAddRule(){
    const newValue = "Use " + amount + " " + number +" players for " + team;
    setStackingArray([...stackingArray, newValue]);
    // console.log(stackingArray);
  }

  function deleteFromStackingArray(index){
    const spliced = stackingArray.slice(0, index).concat(stackingArray.slice(index + 1, stackingArray.length));
    setStackingArray(spliced);
  }

  return (
    <React.Fragment>
      <div>
        <div className="stacking">
          {perTeam ? (
            <div>
              <div>
                <span
                  className="stacking-filter"
                  style={{ float: "right" }}
                  onClick={handlePerTeam}
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
                  <strong className="first-text">Use</strong>

                  <select
                    className="dropdown"
                    value={amount}
                    onChange={handleAmount}
                  >
                    <option value="atleast">At least</option>
                    <option value="exactly">Exactly</option>
                    <option value="atmost">At most</option>
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

                  <strong className="first-text">for</strong>

                  <select
                    className="dropdown"
                    value={team}
                    onChange={handleTeam}
                  >
                    {teams.map((team) => {
                      return <option value={team}>{team}</option>;
                    })}
                  </select>

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
            <span className="stacking-filter" onClick={handlePerTeam}>
              <i className="fa fa-cog"></i> PER-TEAM PLAYER LIMITS
            </span>
          )}
        </div>
      </div>
    </React.Fragment>
  );
}