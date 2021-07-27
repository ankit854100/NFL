import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import { lineup, totalLineUps } from "../../data";
import LineupInfo from "./LineupInfo";
import LineUpsPlayer from "./LineUpsPlayer";
import {connect} from "react-redux";
import setAllClick, {sortByTotalPowns, sortByFinalFpts, sortBySalary, sortByProjection, sortByFantasyPoints, setIsChecked, setNoneClicked, setUnChecked, setIsDelete, setPlayerChecked, setPlayerUnChecked, setOptimize} from "../../redux/Bottom/ActionContainer"

const mapStateToProps = (state) => {
  return{
    lineups : state.bottom.lineups,
    total_players: state.bottom.total_players,
    icons: state.gamebox.icons
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setAllClick: () => dispatch(setAllClick()),
    setNoneClick: () => dispatch(setNoneClicked()),
    setIsChecked: (val) => dispatch(setIsChecked(val)),
    setUnChecked: (val) => dispatch(setUnChecked(val)),
    setIsDelete: (val) => dispatch(setIsDelete(val)),
    setPlayerChecked: (value) => dispatch(setPlayerChecked(value)),
    setPlayerUnChecked: (value) => dispatch(setPlayerUnChecked(value)),
    setOptimize: () => dispatch(setOptimize()),
    sortBySalary: () => dispatch(sortBySalary()),
    sortByFantasyPoints: () => dispatch(sortByFantasyPoints()),
    sortByFinalFpts: () => dispatch(sortByFinalFpts()),
    sortByTotalPowns: () => dispatch(sortByTotalPowns()),
    sortByProjection: () => dispatch(sortByProjection())
  };
};


const sortLineups = [
  "Fantasy points",
  "Projection",
  "Final Fpts",
  "Salary",
  "Total pOwns"
];

function Bottom(props) {
  const [control, setControl] = useState("ALL");
  const [playerStackVal, setPlayerStackVal] = useState("PLAYER");
  const [position, setPosition] = useState("ALL");
  const [dropdownVal, setDropdownval] = useState("Fantasy points");
  const [sortingVariable, setSortingVariable] = useState("None");

  // useEffect(() => {
  //   console.log("rendered from bottom");
  // })

  function handleDropDown(e){
    if(e.target.value === "Salary"){
      setDropdownval(e.target.value)
      // props.sortBySalary();
    }

    else if(e.target.value === "Fantasy points"){
      setDropdownval(e.target.value)
      // props.sortByFantasyPoints();
    }

    else if(e.target.value === "Projection"){
      setDropdownval(e.target.value)
      // props.sortByProjection();
    }

    else if(e.target.value === "Final Fpts"){
      setDropdownval(e.target.value)
      // props.sortByFinalFpts();
    }

    else if(e.target.value === "Total pOwns"){
      setDropdownval(e.target.value)
      // props.sortByTotalPowns();
    }
  }

  function handleSort(){
    if(dropdownVal === "Salary"){
      props.sortBySalary();
      setSortingVariable("Salary");
    }

    else if(dropdownVal === "Fantasy points"){
      props.sortByFantasyPoints();
      setSortingVariable("Fantasy points");
    }

    else if(dropdownVal === "Projection"){
      props.sortByProjection();
      setSortingVariable("Projection");
    }

    else if(dropdownVal === "Final Fpts"){
      props.sortByFinalFpts();
      setSortingVariable("Final Fpts");
    }

    else if(dropdownVal === "Total pOwns"){
      props.sortByTotalPowns();
      setSortingVariable("Total pOwns");
    }
  }

  function positionFilterALL() {
    setPosition("ALL");
  }

  function positionFilterQB() {
    setPosition("QB");
  }

  function positionFilterRB() {
    setPosition("RB");
  }

  function positionFilterWR() {
    setPosition("WR");
  }

  function positionFilterTE() {
    setPosition("TE");
  }

  function positionFilterDST() {
    setPosition("DEF");
  }

  function handlePlayer() {
    setPlayerStackVal("PLAYER");
  }

  function handleStack() {
    setPlayerStackVal("STACK");
  }

  function handleAllClick() {
    setControl("ALL");
    props.setAllClick();
  }
  function handleNoneClick() {
    setControl("NONE");
    props.setNoneClick();
  }

  function handleOptimize(){
    props.setOptimize();
  }
  return (
    <div>
      <div className="white-box">
        <div className="controls-container">
          <label className="mode">Select lineups:</label>
          <div
            className="option-container"
            style={{ border: "1px solid #DDDDDD", display: "inline-block" }}
          >
            <div>
              <span
                className={
                  control === "ALL" ? "mode-option active" : "mode-option"
                }
                onClick={handleAllClick}
              >
                ALL
              </span>
              <span
                className={
                  control === "NONE" ? "mode-option active" : "mode-option"
                }
                onClick={handleNoneClick}
              >
                NONE
              </span>
            </div>
          </div>
          <label className="mode">Sort lineups:</label>
          <div className="white-box-dropdown-container">
            <select
              className="slate-dropdown"
              value={dropdownVal}
              onChange={handleDropDown}
              style={{
                minWidth: "7.25rem",
                minHeight: "0",
                fontSize: "13px",
                borderRadius: "0"
              }}
            >
              {sortLineups.map((curr) => {
                return <option value={curr}>{curr}</option>;
              })}
            </select>
            <Button className="white-box-btn" variant="primary" onClick={handleSort}>
              <strong>SORT</strong>
            </Button>
          </div>
        </div>
        <div className="white-box-button-set">
          <Button className="lineup-delete-botton" variant="danger" style={{ backgroundColor: "#952929" }} >
            <strong>
              <i class="fa fa-trash"> DELETE</i>
            </strong>
            <span style={{ color: "#c69a9a" }}>{props.lineups.length} selected lineups</span>
          </Button>
          <Button className="lineup-download-button" variant="success" style={{ backgroundColor: "#6D951E" }}>
            <strong>
              <i class="fa fa-cloud-download"></i> DOWNLOAD
            </strong>
            <span>with {props.lineups.length}  selected lineups</span>
          </Button>{" "}
        </div>
      </div>
      <div className="bottom-section">
        <div className="bottom-section-first">
          <div className="first-top">
            <span
              className={
                playerStackVal === "PLAYER"
                  ? "mode-option first-top-active"
                  : "mode-option"
              }
              onClick={handlePlayer}
            >
              PLAYERS
            </span>
            <span
              className={
                playerStackVal === "STACK"
                  ? "mode-option first-top-active"
                  : "mode-option"
              }
              onClick={handleStack}
            >
              STACK COMBINATIONS
            </span>
          </div>
          {playerStackVal === "PLAYER" ? (
            <div className="first-bottom">
              <div className="first-bottom-title">
                <div>
                  <span style={{ marginRight: "0.5rem" }}>
                    <strong>{props.total_players.length}</strong> PLAYERS USED
                  </span>
                  <span
                    style={{
                      borderLeft: "2px solid #fff",
                      paddingLeft: "0.25rem"
                    }}
                  >
                    <strong>{props.lineups.length}</strong> LINEUPS
                  </span>
                </div>
                {/* <Button varient="primary" onClick={handleOptimize}>
                  <strong>OPTIMIZE</strong>
                </Button> */}
              </div>
              <div className="first-bottom-positions">
                <span
                  className={
                    position === "ALL" ? "first-bottom-positions-active" : null
                  }
                  onClick={positionFilterALL}
                >
                  ALL
                </span>
                <span
                  className={
                    position === "QB" ? "first-bottom-positions-active" : null
                  }
                  onClick={positionFilterQB}
                >
                  QB
                </span>
                <span
                  className={
                    position === "RB" ? "first-bottom-positions-active" : null
                  }
                  onClick={positionFilterRB}
                >
                  RB
                </span>
                <span
                  className={
                    position === "WR" ? "first-bottom-positions-active" : null
                  }
                  onClick={positionFilterWR}
                >
                  WR
                </span>
                <span
                  className={
                    position === "TE" ? "first-bottom-positions-active" : null
                  }
                  onClick={positionFilterTE}
                >
                  TE
                </span>
                <span
                  className={
                    position === "DST" ? "first-bottom-positions-active" : null
                  }
                  onClick={positionFilterDST}
                >
                  DST
                </span>
              </div>
              <div className="first-bottom-table">
                <table>
                  <thead>
                    <tr>
                      <th></th>
                      <th style={{ width: "180px", textAlign: "left" }}>
                        <span>Name</span>
                      </th>
                      <th>Pos</th>
                      <th>Team</th>
                      <th>Fpts</th>
                      <th>Exp%</th>
                      <th>ProjOwn%</th>
                      <th style={{ width: "2.5rem" }}>Exp min.</th>
                      <th style={{ width: "2.5rem" }}>Exp max.</th>
                    </tr>
                  </thead>
                  <tbody>
                    {props.total_players.map((data, index) => {
                      return position === "ALL" ? (
                        <LineUpsPlayer  key={index} 
                                        index={index}
                                        data={data}
                                        icons = {props.icons}
                                        checked= {props.setPlayerChecked}
                                        unchecked= {props.setPlayerUnChecked}/>
                      ) : position === data.pos ? (
                        <LineUpsPlayer  key={index} 
                                        index={index}
                                        data={data}
                                        icons = {props.icons}
                                        checked= {props.setPlayerChecked}
                                        unchecked= {props.setPlayerUnChecked}/>
                      ) : null;
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          ) : null}
        </div>
        <div className="bottom-section-second">
          {props.lineups.map((item, index) => {
            return <LineupInfo  
                        key={index}
                        data={item} 
                        icons={props.icons}
                        setIsChecked={props.setIsChecked} 
                        setUnChecked={props.setUnChecked} 
                        setIsDelete={props.setIsDelete}
                    />
          })}
        </div>
      </div>
      <style jsx>{`
        .white-box {
          background: #fff;
          border-radius: 4px;
          padding: 25px 30px 15px;
          box-shadow: 0 0 35px rgb(0 0 0 / 5%);
          margin: 0 0 20px;
          display: flex;
          justify-content: space-between;
          color: #707070;
        }

        .controls-container {
          display: flex;
          align-items: baseline;
        }

        .controls-container label {
          font-size: 13px;
          line-height: 15px;
          margin: 0 0 5px;
          font-weight: 700;
        }

        .white-box-btn {
          border-bottom-left-radius: 0;
          border-top-left-radius: 0;
        }

        .white-box-dropdown-container {
          display: flex;
        }

        .white-box-button-set span {
          display: block;
          text-transform: none;
          font-weight: 400;
          font-size: 13px;
          line-height: 16px;
        }

        .white-box-button-set .btn {
          padding-top: 0;
          padding-bottom: 0;
          margin-left: 0.5rem;
        }

        .lineup-delete-botton:hover{
          background-color: #800000 !important;
        }

        .lineup-download-button:hover{
          background-color: #228B22 !important;
        }

        .bottom-section {
          display: flex;
        }

        .bottom-section-first {
          width: 50%;
        }

        .bottom-section-second {
          width: 50%;
        }

        .first-top {
          display: flex;
          text-align: center;
          margin-bottom: 1rem;
        }

        .first-top span {
          width: 50%;
          color: #057df7 !important;
        }

        .first-top-active {
          color: #057df7 !important;
          box-shadow: 0 0 0 2px #057df7 !important;
          border-radius: 1.18rem !important;
          margin: 1px 0 !important;
          padding: 0.5625rem 0.937rem !important;
        }

        .first-bottom-title {
          display: flex;
          justify-content: space-between;
          background: #2c3235;
        }

        .first-bottom-title div {
          color: #fff;
          text-transform: uppercase;
          padding: 20px 110px 20px 10px;
          font-size: 13px;
        }

        .first-bottom-title .btn {
          border-radius: 0;
        }

        .first-bottom-positions {
          display: flex;
          cursor: pointer;
          color: #c0bebe;
        }

        .first-bottom-positions span {
          width: 100%;
          text-align: center;
          border: 1px solid #dddddd;
          font-size: 15px;
          line-height: 20px;
          font-weight: 700;
          padding: 0.5rem;
          background-color: #ebe9e9;
        }

        .first-bottom-positions-active {
          color: #707070;
          background-color: #fff !important;
        }

        .first-bottom-positions span:hover {
          color: #707070;
          background-color: #fff !important;
        }

        .first-bottom-table th {
          background: #2c3235;
          text-align: left;
          color: #fff;
          font-weight: 400;
          vertical-align: middle;
          height: 55px;
          border: none;
          text-align: center;
        }

        .first-bottom-table {
          font-size: 13px;
          color: #707070;
          height: 615px;
          overflow: auto;
        }

        .first-bottom-table table {
          width: 100%;
        }

        .first-bottom-table td {
          padding: 0.25rem;
          text-align: center;
        }

        // .bottom-section-second {
        //   padding-left: 1rem;
        // }
        // .bottom-section-second-top {
        //   background-color: #2c3235;
        // }

        // .bottom-section-second-top {
        //   color: #fff;
        //   font-size: 12px;
        //   font-weight: 400;
        //   display: flex;
        //   justify-content: space-evenly;
        //   align-item: baseline;
        //   padding-top: 0.25rem;
        //   padding-bottom: 0.25rem;
        // }

        // .bottom-section-second-top strong {
        //   color: #dce694;
        //   font-size: 12px;
        //   font-weight: 400;
        // }

        // .bottom-section-second-table th {
        //   background: #2c3235;
        //   text-align: left;
        //   color: #fff;
        //   font-weight: 400;
        //   vertical-align: middle;
        //   // height: 55px;
        //   padding: 0.25rem;
        //   border: none;
        //   text-align: left;
        // }

        // .bottom-section-second-table table {
        //   font-size: 13px;
        //   color: #707070;
        //   width: 100%;
        // }

        // .bottom-section-second-table td {
        //   padding: 0.25rem;
        //   // text-align: center;
        // }
      `}</style>
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Bottom);


{/* <tr className={index % 2 === 0 ? "odd" : "even"}>
                          <td>
                            <input type="checkbox" checked={true} />
                          </td>
                          <td style={{ textAlign: "left" }}>
                            <span>
                              <strong>{data.name}</strong>
                            </span>
                          </td>
                          <td>{data.Pos}</td>
                          <td>
                            <img className="mood-icon" src={data.team} alt="" />
                          </td>
                          <td>
                            <input
                              className="percent table-text-input"
                              type="text"
                              value={data.Fpts}
                            />
                          </td>
                          <td>{data.exp}</td>
                          <td>{data.projOwn}</td>
                          <td>
                            <input
                              className="percent table-text-input"
                              type="text"
                              value={data.min}
                            />
                          </td>
                          <td>
                            <input
                              className="percent table-text-input"
                              type="text"
                              value={data.max}
                            />
                          </td>
                        </tr> */}