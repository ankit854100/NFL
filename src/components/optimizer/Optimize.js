import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import Button from "react-bootstrap/Button";
import RangeSlider from "./RangeSlider";
import Slider from "./Slider";
import "./optimizer.css";
import salaryCap, {
  salaryRange,
  fpRange,
  projectedOwnershipCap,
  randomization,
  prioritize,
  playerExposure,
  passCatcher,
  numOfLineups,
  flexPositions,
  forceAtleast,
  forcePlayer,
  selectMode,
  projectionOrFpts,
  uniquePLayer,
  playerVsDefence,
  browserOrServer
} from "../../redux/optimizer/actionContainer";
import { playersData } from "../../data";

import {
  setExcludedPlayer,
  setAllPlayer
} from "../../redux/PlayerTableItem/ActionContainer";

const uniquePlayer = [1, 2, 3, 4, 5, 6];

const mapStateToProps = (state) => {
  return {
    salaryRange: state.optimizer.salaryRange,
    fpRange: state.optimizer.fpRange,
    salaryCap: state.optimizer.salaryCap,
    projectedOwnershipCap: state.optimizer.projectedOwnershipCap,
    numOfLineups: state.optimizer.numOfLineups,
    flexPositions: state.optimizer.flexPositions,
    passCatcher: state.optimizer.passCatcher,
    forcePlayer: state.optimizer.forcePlayer,
    forceAtleast: state.optimizer.forceAtleast,
    prioritize: state.optimizer.prioritize,
    randomization: state.optimizer.randomization,
    playerExposure: state.optimizer.playerExposure,
    mode: state.optimizer.mode,
    projOrFpts: state.optimizer.projOrFpts,
    uniquePLayer: state.optimizer.uniquePLayer,
    playerVsDefence: state.optimizer.playerVsDefence,
    browserOrServer: state.optimizer.browserOrServer,
    excludedPlayer: state.table.excludedPlayer,
    all: state.table.all
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleSalaryCap: (value) => dispatch(salaryCap(value)),
    handleSalaryRange: (value) => dispatch(salaryRange(value)),
    handleFPRange: (value) => dispatch(fpRange(value)),
    handleProjownCap: (value) => dispatch(projectedOwnershipCap(value)),
    handleRandomization: (value) => dispatch(randomization(value)),
    handlePrioritize: (value) => dispatch(prioritize(value)),
    handlePlayerExposure: (value) => dispatch(playerExposure(value)),
    handlePassCatcher: (value) => dispatch(passCatcher(value)),
    handleNumOfLineups: (value) => dispatch(numOfLineups(value)),
    handleFlexPositions: (value) => dispatch(flexPositions(value)),
    handleForceAtleast: (value) => dispatch(forceAtleast(value)),
    handleForcePlayer: (value) => dispatch(forcePlayer(value)),
    handleMode: (value) => dispatch(selectMode(value)),
    handleProjOrFpts: (value) => dispatch(projectionOrFpts(value)),
    handleUniquePlayer: (value) => dispatch(uniquePLayer(value)),
    handlePlayerVsDefence: (value) => dispatch(playerVsDefence(value)),
    handleBrowserOrServer: (value) => dispatch(browserOrServer(value)),
    addExcludedPlayer: (value) => dispatch(setExcludedPlayer(value)),
    setAllPlayer: (value) => dispatch(setAllPlayer(value))
  };
};

function Optimize(props) {
  const [radio, setRadio] = useState("ALL");
  const [flexVal1, setFlexVal1] = useState("100");
  const [flexVal2, setFlexVal2] = useState("100");
  const [flexVal3, setFlexVal3] = useState("100");
  const [dropDownMode, setDropownMode] = useState("Optimal mode");
  const [dropDownProjection, setDropDownProjection] = useState("Projection");
  const [dropDownUniquePlayer, setDropDownUniquePlayer] = useState(1);
  const [dropDownDefence, setDropDownDefence] = useState(1);
  const [dropDownBrowser, setDropDownBrowser] = useState("Browser");
  const [salaryRange, setSalaryRange] = useState([2000, 9500]);
  const [FPRange, setFPRange] = useState([0.1, 26.31]);
  const [salaryCap, setSalaryCap] = useState([0, 900]);
  const [projectOwnCap, setProjectedOwnCap] = useState([0, 900]);
  const [lineup, setLineup] = useState(3);
  const [randomization, setRandomization] = useState(0);
  const [passCatcher, setPassCatcher] = useState(false);
  const [forcePlayer, setForePlayer] = useState(false);
  const [playerExposure, setPlayerExposure] = useState(false);
  const [prioritize, setPrioritize] = useState(false);
  const [forcePosition, setForcePosition] = useState(false);
  const [numberOfPlayer, setNumberOfPlayer] = useState(1);
  const [QB, setQB] = useState(true);
  const [RB, setRB] = useState(true);
  const [WR, setWR] = useState(true);
  const [TE, setTE] = useState(true);
  const [DST, setDST] = useState(true);
  const [projOwn, setProjOwn] = useState(100);

  function onFlexVal1Change(e) {
    setFlexVal1(e.target.value);
    props.handleFlexPositions({
      RB: e.target.value,
      TE: flexVal2,
      WR: flexVal3
    });
  }

  function onFlexVal2Change(e) {
    setFlexVal2(e.target.value);
    props.handleFlexPositions({
      RB: flexVal1,
      TE: e.target.value,
      WR: flexVal3
    });
  }

  function onFlexVal3Change(e) {
    setFlexVal3(e.target.value);
    props.handleFlexPositions({
      RB: flexVal1,
      TE: flexVal2,
      WR: e.target.value
    });
  }

  function handleRadio(e) {
    setRadio(e.target.value);
    console.log(radio);
  }

  function handleDropDownMode(e) {
    setDropownMode(e.target.value);
    props.handleMode(e.target.value);
  }

  function handleDropDownProjection(e) {
    setDropDownProjection(e.target.value);
    props.handleProjOrFpts(e.target.value);
  }
  function handleDropDownUniquePlayer(e) {
    setDropDownUniquePlayer(e.target.value);
    props.handleUniquePlayer(e.target.value);
  }

  function handleDropDownDefence(e) {
    setDropDownDefence(e.target.value);
    props.handlePlayerVsDefence(e.target.value);
  }

  function handleDropDownBrowser(e) {
    setDropDownBrowser(e.target.value);
    props.handleBrowserOrServer(e.target.value);
  }

  function handleSalaryRange(array) {
    setSalaryRange(array);
    props.handleSalaryRange(array);
    // console.log(array);
  }

  function handleFPRange(array) {
    setFPRange(array);
    props.handleFPRange(array);
  }

  function handleSalaryCap(array) {
    setSalaryCap(array);
    props.handleSalaryCap(array);
  }

  function handleProjectedOwnCap(array) {
    setProjectedOwnCap(array);
    props.handleProjownCap(array);
  }

  function handleLineUp(val) {
    setLineup(val);
    props.handleNumOfLineups(val);
  }

  function handleRandomization(val) {
    setRandomization(val);
    props.handleRandomization(val);
  }

  function handlePassCatcher() {
    if (passCatcher === true) {
      setPassCatcher(false);
      props.handlePassCatcher(false);
    } else {
      setPassCatcher(true);
      props.handlePassCatcher(true);
    }
  }

  function handleForcePlayer() {
    if (forcePlayer === true) {
      setForePlayer(false);
      props.handleForcePlayer(false);
    } else {
      setForePlayer(true);
      props.handleForcePlayer(true);
    }
  }

  function handlePlayerExposure() {
    if (playerExposure === true) {
      setPlayerExposure(false);
      props.handlePlayerExposure(false);
    } else {
      setPlayerExposure(true);
      props.handlePlayerExposure(true);
    }
  }

  function handlePrioritize() {
    if (prioritize === true) {
      setPrioritize(false);
      props.handlePrioritize(false);
    } else {
      setPrioritize(true);
      props.handlePrioritize(true);
    }
  }

  function handleForcePosition() {
    if (forcePosition === true) {
      setForcePosition(false);
      props.handleForceAtleast({
        bool: false,
        dropdown: numberOfPlayer,
        QB: QB,
        RB: RB,
        WR: WR,
        TE: TE,
        DST: DST,
        pOwn: projOwn
      });
    } else {
      setForcePosition(true);
      props.handleForceAtleast({
        bool: true,
        dropdown: numberOfPlayer,
        QB: QB,
        RB: RB,
        WR: WR,
        TE: TE,
        DST: DST,
        pOwn: projOwn
      });
    }
  }

  function handleNumberOfPlayer(e) {
    setNumberOfPlayer(e.target.value);
    props.handleForceAtleast({
      bool: forcePosition,
      dropdown: e.target.value,
      QB: QB,
      RB: RB,
      WR: WR,
      TE: TE,
      DST: DST,
      pOwn: projOwn
    });
  }

  function handleQB() {
    if (QB === true) {
      setQB(false);
      props.handleForceAtleast({
        bool: forcePosition,
        dropdown: numberOfPlayer,
        QB: false,
        RB: RB,
        WR: WR,
        TE: TE,
        DST: DST,
        pOwn: projOwn
      });
    } else {
      setQB(true);
      props.handleForceAtleast({
        bool: forcePosition,
        dropdown: numberOfPlayer,
        QB: true,
        RB: RB,
        WR: WR,
        TE: TE,
        DST: DST,
        pOwn: projOwn
      });
    }
  }

  function handleRB() {
    if (RB === true) {
      setRB(false);
      props.handleForceAtleast({
        bool: forcePosition,
        dropdown: numberOfPlayer,
        QB: QB,
        RB: false,
        WR: WR,
        TE: TE,
        DST: DST,
        pOwn: projOwn
      });
    } else {
      setRB(true);
      props.handleForceAtleast({
        bool: forcePosition,
        dropdown: numberOfPlayer,
        QB: QB,
        RB: true,
        WR: WR,
        TE: TE,
        DST: DST,
        pOwn: projOwn
      });
    }
  }

  function handleWR() {
    if (WR === true) {
      setWR(false);
      props.handleForceAtleast({
        bool: forcePosition,
        dropdown: numberOfPlayer,
        QB: QB,
        RB: RB,
        WR: false,
        TE: TE,
        DST: DST,
        pOwn: projOwn
      });
    } else {
      setWR(true);
      props.handleForceAtleast({
        bool: forcePosition,
        dropdown: numberOfPlayer,
        QB: QB,
        RB: RB,
        WR: true,
        TE: TE,
        DST: DST,
        pOwn: projOwn
      });
    }
  }

  function handleTE() {
    if (TE === true) {
      setTE(false);
      props.handleForceAtleast({
        bool: forcePosition,
        dropdown: numberOfPlayer,
        QB: QB,
        RB: RB,
        WR: WR,
        TE: false,
        DST: DST,
        pOwn: projOwn
      });
    } else {
      setTE(true);
      props.handleForceAtleast({
        bool: forcePosition,
        dropdown: numberOfPlayer,
        QB: QB,
        RB: RB,
        WR: WR,
        TE: true,
        DST: DST,
        pOwn: projOwn
      });
    }
  }

  function handleDST() {
    if (DST === true) {
      setDST(false);
      props.handleForceAtleast({
        bool: forcePosition,
        dropdown: numberOfPlayer,
        QB: QB,
        RB: RB,
        WR: WR,
        TE: TE,
        DST: false,
        pOwn: projOwn
      });
    } else {
      setDST(true);
      props.handleForceAtleast({
        bool: forcePosition,
        dropdown: numberOfPlayer,
        QB: QB,
        RB: RB,
        WR: WR,
        TE: TE,
        DST: true,
        pOwn: projOwn
      });
    }
  }

  function handleProjOwn(e) {
    setProjOwn(parseFloat(e.target.value));
    props.handleForceAtleast({
      bool: forcePosition,
      dropdown: numberOfPlayer,
      QB: QB,
      RB: RB,
      WR: WR,
      TE: TE,
      DST: DST,
      pOwn: e.target.value
    });
  }

  function handleButtonClick() {
    // console.log(salaryRange);
    // console.log(FPRange);
    // console.log(salaryCap);
    // console.log(projectOwnCap);
    // console.log(lineup);
    // console.log(passCatcher);
    props.allowBottom(true);
  }
  return (
    <div className="optimizer">
      <div className="optimizer-left">
        <div className="optimizer-top">
          <div className="first-col">
            <div className="first-col-row">
              <div className="box left-most">
                <span className="heading-text">
                  <i class="fa fa-info-circle"></i>Salary Range
                </span>
                <RangeSlider
                  min={2000}
                  max={9500}
                  step={100}
                  callBack={handleSalaryRange}
                />
              </div>
              <div className="box">
                <span className="heading-text">
                  <i class="fa fa-info-circle"></i>FP Range
                </span>
                <RangeSlider
                  min={0.1}
                  max={26.31}
                  step={0.01}
                  callBack={handleFPRange}
                />
              </div>
              <div className="box">
                <span className="heading-text">Salary Cap</span>
                <RangeSlider
                  min={0}
                  max={50000}
                  step={100}
                  callBack={handleSalaryCap}
                />
              </div>
            </div>
            <div className="first-col-row second-div">
              <div className="box left-most">
                <span className="heading-text">Projected Ownership Cap</span>
                <RangeSlider
                  min={0}
                  max={900}
                  step={10}
                  callBack={handleProjectedOwnCap}
                />
              </div>
              <div className="box">
                <span className="heading-text"># of lineups</span>
                <Slider min={1} max={300} step={1} callBack={handleLineUp} />
              </div>
            </div>
          </div>
          <div className="second-col">
            <div className="second-col-inner">
              <div>
                <i class="fa fa-info-circle"></i>
                <select
                  className="optimizer-dropdown"
                  value={dropDownMode}
                  onChange={handleDropDownMode}
                >
                  <option value="Optimal mode">Optimal mode</option>
                  <option value="Tournament mode">Tournament mode</option>
                </select>
              </div>

              <div>
                <i class="fa fa-info-circle"></i>
                <select
                  className="optimizer-dropdown"
                  value={dropDownProjection}
                  onChange={handleDropDownProjection}
                >
                  <option value="Projection">Projection</option>
                  <option value="Final FPts">Final FPts</option>
                </select>
              </div>

              <div>
                <i class="fa fa-info-circle"></i>
                <select
                  className="optimizer-dropdown"
                  value={dropDownUniquePlayer}
                  onChange={handleDropDownUniquePlayer}
                >
                  {uniquePlayer.map((player) => {
                    return (
                      <option value={player}>{player} Unique Player</option>
                    );
                  })}
                </select>
              </div>

              <div>
                <i class="fa fa-info-circle"></i>
                <select
                  className="optimizer-dropdown"
                  value={dropDownDefence}
                  onChange={handleDropDownDefence}
                >
                  <option value={0}>0 Player vs Defence</option>
                  {uniquePlayer.map((player) => {
                    return <option value={player}>max {player} Player</option>;
                  })}
                </select>
              </div>

              <div>
                <i class="fa fa-info-circle"></i>
                <select
                  className="optimizer-dropdown"
                  value={dropDownBrowser}
                  onChange={handleDropDownBrowser}
                >
                  <option value="Browser">Browser</option>
                  <option value="Server">Server</option>
                </select>
              </div>
            </div>
          </div>
        </div>
        <div className="optimizer-bottom">
          <div className="box left-most">
            <span className="heading-text">flex positions: </span>
            <div>
              <div className="flex-position-container">
                <span>RB</span>
                <div className="input-container">
                  <input
                    type="text"
                    value={flexVal1}
                    onChange={onFlexVal1Change}
                    className="percent"
                  />
                  <span>%</span>
                </div>
              </div>
              <div className="flex-position-container">
                <span>TE</span>
                <div className="input-container">
                  <input
                    type="text"
                    value={flexVal2}
                    onChange={onFlexVal2Change}
                    className="percent"
                  />
                  <span>%</span>
                </div>
              </div>
              <div className="flex-position-container">
                <span>WR</span>
                <div className="input-container">
                  <input
                    type="text"
                    value={flexVal3}
                    onChange={onFlexVal3Change}
                    className="percent"
                  />
                  <span>%</span>
                </div>
              </div>
            </div>
          </div>
          <div className="box span-input-container">
            <input
              type="checkbox"
              style={{ margin: "0.125rem" }}
              checked={passCatcher}
              onChange={handlePassCatcher}
            />
            <span>
              Disallow more than one pass catcher (TE, WR) from the same team
              unless the QB from that team is being used in the lineup
            </span>
          </div>
          <div className="box span-input-container">
            <input
              type="checkbox"
              style={{ margin: "0.125rem" }}
              checked={forcePlayer}
              onChange={handleForcePlayer}
            />
            <span>Force a player from the last game to a flex position</span>
          </div>
          <div className="box" style={{ lineHeight: "1rem" }}>
            <span>
              <input
                type="checkbox"
                style={{ margin: "0.125rem" }}
                checked={forcePosition}
                onChange={handleForcePosition}
              />
              force atleast one{" "}
              <select
                className="optimizer-dropdown another-dropdown"
                value={numberOfPlayer}
                onChange={handleNumberOfPlayer}
              >
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
              </select>
              players of{" "}
              <input
                type="checkbox"
                style={{ margin: "0.125rem" }}
                checked={QB}
                onChange={handleQB}
              />{" "}
              QB{" "}
              <input
                type="checkbox"
                style={{ margin: "0.125rem" }}
                checked={RB}
                onChange={handleRB}
              />{" "}
              RB{" "}
              <input
                type="checkbox"
                style={{ margin: "0.125rem" }}
                checked={WR}
                onChange={handleWR}
              />{" "}
              WR{" "}
              <input
                type="checkbox"
                style={{ margin: "0.125rem" }}
                checked={TE}
                onChange={handleTE}
              />{" "}
              TE <input type="checkbox" checked={DST} onChange={handleDST} />{" "}
              DST under{" "}
              <div className="input-container">
                <input
                  type="text"
                  value={projOwn}
                  onChange={handleProjOwn}
                  className="percent"
                />
                <span>%</span>
              </div>{" "}
              projected ownership in each line
            </span>
          </div>
        </div>
        <div className="optimizer-bottom">
          <div className="box left-most span-input-container">
            <input
              type="checkbox"
              style={{ margin: "0.125rem" }}
              checked={prioritize}
              onChange={handlePrioritize}
            />
            <span>
              Prioritize completing lineups above min/max exposure settings
            </span>
          </div>
          <div className="box">
            <span className="heading-text">
              <i class="fa fa-info-circle"></i>Randomization %
            </span>
            <Slider min={0} max={50} step={1} callBack={handleRandomization} />
          </div>
          <div className="box">
            <div className="box left-most span-input-container">
              <i class="fa fa-info-circle"></i>
              <input
                type="checkbox"
                style={{ margin: "0.125rem" }}
                checked={playerExposure}
                onChange={handlePlayerExposure}
              />
              <span>Show players exposure during optimization</span>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="optimizer-right"> */}
      <Button varient="primary" onClick={handleButtonClick}>
        OPTIMIZE
      </Button>
      {/* </div> */}
      <style jsx>{`
        .another-dropdown {
          min-width: 28px !important;
        }
      `}</style>
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Optimize);
