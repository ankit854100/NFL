import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import "./stacking.css";
import ShowStacking from "./ShowStaking";
import { connect } from "react-redux";
import {setPerTeam, setDeletePerTeam} from "../../redux/stack/actionContainer"
import {setPerTeamArray, deletePerTeamArray} from "../../redux/stackingData/ActionContainer";

const numbers = ["1", "2", "3", "4"];
const teams = ["others", "GB", "LAR", "BUF", "BAL"];

const mapStateToProps = (state) => {
  return {
    selectedList: state.gamebox.selectedList,
    perTeamArray: state.stackingData.perTeamArray
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setPerTeam: (value) => dispatch(setPerTeam(value)),
    setDeletePerTeam: (value) => dispatch(setDeletePerTeam(value)),
    setPerTeamArray: (value) => dispatch(setPerTeamArray(value)),
    deletePerTeamArray: (value) => dispatch(deletePerTeamArray(value))
  };
};

function PerTeam(props) {
  const [perTeam, setPreTeam] = useState(false);
  const [amount, setAmount] = useState("atmost");
  const [number, setNumber] = useState("1");
  const [team, setTeam] = useState("others");

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
    const arr = {"type1": amount, "num_of_players": parseInt(number), "team": team};
    // console.log(arr);
    props.setPerTeam(arr);
    props.setPerTeamArray({text: newValue, output: arr});
    resetValues();
    // console.log(stackingArray);
  }

  function resetValues(){
    setAmount("atmost");
    setNumber("1");
    setTeam("others");
  }

  function deleteFromStackingArray(index){
    props.deletePerTeamArray(index);
    props.setDeletePerTeam(index.output);
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
                    <option value="atmost" selected>At most</option>
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
                    <option value="others" selected>others</option>
                    {props.selectedList.map((team) => {
                      return <option value={team}>{team}</option>;
                    })}
                  </select>

                  <Button variant="primary" className="rule-button" onClick={handleAddRule}>
                    ADD RULE
                  </Button>
                </div>
              </div>
              {props.perTeamArray.length > 0 ? 
                <div className="showstacking-container">
                  {props.perTeamArray.map((val, index) => {
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

export default connect(mapStateToProps, mapDispatchToProps)(PerTeam);