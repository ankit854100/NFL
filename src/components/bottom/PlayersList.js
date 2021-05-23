import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import PlayerListItem from "./PlayerListItem";
import { playersData } from "../../data";
import checked, {
  lockPlayer,
  unLockPlayer,
  unChecked,
  changeFPTS,
  setAllPlayer
} from "../../redux/PlayerTableItem/ActionContainer";

const chainUrl = [
  "https://image.flaticon.com/icons/png/128/3100/3100349.png",
  "https://image.flaticon.com/icons/png/128/115/115771.png"
];

const lockUrl = [
  "https://image.flaticon.com/icons/png/128/633/633669.png",
  "https://image.flaticon.com/icons/png/128/1828/1828415.png"
];

const mapStateToProps = (state) => {
  return {
    all: state.table.all,
    myPlayer: state.table.myPlayer,
    excludedPlayer: state.table.excludedPlayer,
    lockedPlayer: state.table.lockedPlayer
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    checked: (value) => dispatch(checked(value)),
    unChecked: (value) => dispatch(unChecked(value)),
    lockPlayer: (value) => dispatch(lockPlayer(value)),
    unLockPlayer: (value) => dispatch(unLockPlayer(value)),
    changeFPTS: (value) => dispatch(changeFPTS(value)),
    setAllPlayer: (value) => dispatch(setAllPlayer(value))
  };
};

function PlayerList(props) {
  const [tableTab, setTableTab] = useState("allPlayers");
  const [allPLayer, setAllPlayer] = useState(true);
  const [myPlayer, setMyPlayer] = useState(false);
  const [myExclusion, setMyExclusion] = useState(false);
  const [lockedPlayer, setLockedPlayer] = useState(false);
  const [expMin, setExpMin] = useState("0");
  const [expMax, setExpMax] = useState("100");
  // const [chain, setChain] = useState(chainUrl[0]);
  // const [lock, setLock] = useState(lockUrl[0]);
  const [position, setPosition] = useState("ALL");

  // useEffect(() => {
  // console.log("rendered from playeList");
  // });

  // function handleChainClick() {
  //   if (chain === chainUrl[0]) setChain(chainUrl[1]);
  //   else setChain(chainUrl[0]);
  // }

  // function handleLockClick() {
  //   if (lock === lockUrl[0]) setLock(lockUrl[1]);
  //   else setLock(lockUrl[0]);
  // }

  const handleExpMin = (e) => {
    setExpMin(e.target.value);
  };

  const handleExpMax = (e) => {
    setExpMax(e.target.value);
  };

  const allPlayers = () => {
    setTableTab("allPlayers");
    setAllPlayer(true);
    setMyPlayer(false);
    setMyExclusion(false);
    setLockedPlayer(false);
  };

  const myPlayers = () => {
    setTableTab("myPlayers");
    setAllPlayer(false);
    setMyPlayer(true);
    setMyExclusion(false);
    setLockedPlayer(false);
  };

  const myExcl = () => {
    setTableTab("myExcl");
    setAllPlayer(false);
    setMyPlayer(false);
    setMyExclusion(true);
    setLockedPlayer(false);
  };

  const lockedPlayers = () => {
    setTableTab("lockedPlayers");
    setAllPlayer(false);
    setMyPlayer(false);
    setMyExclusion(false);
    setLockedPlayer(true);
  };

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
    setPosition("DST");
  }

  function changeDvpColor(color) {
    if (color === 0) return "red";
    else if (color > 0 && color <= 5) return "light-red";
    else if (color > 5 && color <= 10) return "orange";
    else if (color > 10 && color <= 15) return "yellow";
    else if (color > 15 && color <= 20) return "dark-yellow";
    else if (color > 20 && color <= 25) return "light-green";
    else if (color > 25 && color <= 30) return "green";
    else if (color > 30 && color <= 35) return "dark-green";
  }

  return (
    <div className="table">
      <div className="table-tab">
        <span
          className={
            tableTab === "allPlayers"
              ? "table-top-span active"
              : "table-top-span"
          }
          onClick={allPlayers}
        >
          ALL PLAYERS
          <span class="list-length">{props.all.length}</span>
        </span>
        <span
          className={
            tableTab === "myPlayers"
              ? "table-top-span active"
              : "table-top-span"
          }
          onClick={myPlayers}
        >
          MY PLAYERS
          <span class="list-length">{props.myPlayer.length}</span>
        </span>
        <span
          className={
            tableTab === "myExcl" ? "table-top-span active" : "table-top-span"
          }
          onClick={myExcl}
        >
          MY EXCLUSIONS
          <span class="list-length">{props.excludedPlayer.length}</span>
        </span>
        <span
          className={
            tableTab === "lockedPlayers"
              ? "table-top-span active"
              : "table-top-span"
          }
          onClick={lockedPlayers}
        >
          LOCKED PLAYERS
          <span class="list-length">{props.lockedPlayer.length}</span>
          <span class="list-length" style={{borderLeft: "2px solid #000", paddingLeft: "2px"}}>$0</span>
        </span>
      </div>
      <div>
        <div className="position-filter-container">
          <div className="position-filter">
            <span>select positions:</span>
            <div className="position-holder">
              <span
                class={
                  position === "ALL"
                    ? "position-filter-span position-filter-span-active"
                    : "position-filter-span"
                }
                onClick={positionFilterALL}
              >
                ALL
              </span>
              <span
                class={
                  position === "QB"
                    ? "position-filter-span position-filter-span-active"
                    : "position-filter-span"
                }
                onClick={positionFilterQB}
              >
                QB
              </span>
              <span
                class={
                  position === "RB"
                    ? "position-filter-span position-filter-span-active"
                    : "position-filter-span"
                }
                onClick={positionFilterRB}
              >
                RB
              </span>
              <span
                class={
                  position === "WR"
                    ? "position-filter-span position-filter-span-active"
                    : "position-filter-span"
                }
                onClick={positionFilterWR}
              >
                WR
              </span>
              <span
                class={
                  position === "TE"
                    ? "position-filter-span position-filter-span-active"
                    : "position-filter-span"
                }
                onClick={positionFilterTE}
              >
                TE
              </span>
              <span
                class={
                  position === "DST"
                    ? "position-filter-span position-filter-span-active"
                    : "position-filter-span"
                }
                style={{ margin: "0" }}
                onClick={positionFilterDST}
              >
                DST
              </span>
            </div>
          </div>
          <div>
            <div className="search-player">
                <span><i class="fa fa-search"></i></span>
                <input type="text" placeholder="Find Player"/>
            </div>
          </div>
        </div>
      </div>
      <div className="table-players">
        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>
                  <input type="checkbox" />
                </th>
                <th style={{ width: "80px" }}>
                  <span>
                    CS<i class="fa fa-info-circle"></i>
                  </span>
                </th>
                <th style={{ width: "242px" }}>Name</th>
                <th>Pos</th>
                <th>Team</th>
                <th></th>
                <th>Opp</th>
                <th>DvP</th>
                <th>Salary</th>
                <th>Fpts/$</th>
                <th>Projection</th>
                <th>Final Fpts</th>
                <th>Rating</th>
                <th>Fpts</th>
                <th>ProsOwn%</th>
                <th style={{ width: "60px" }}>
                  Exp. min
                  <input
                    className="percent table-text-input"
                    type="text"
                    value={expMin}
                    onChange={handleExpMin}
                  />
                </th>
                <th style={{ width: "80px" }}>
                  Exp. max
                  <input
                    className="percent table-text-input"
                    type="text"
                    value={expMax}
                    onChange={handleExpMax}
                  />
                </th>
              </tr>
            </thead>
            {allPLayer ? (
              <tbody>
                {props.all.map((data, index) => {
                  return position === "ALL" ? (
                    <PlayerListItem
                      data={data}
                      changeDvpColor={changeDvpColor}
                      expMin={expMin}
                      expMax={expMax}
                      handleExpMin={handleExpMin}
                      handleExpMax={handleExpMax}
                      lockPlayer={props.lockPlayer}
                      checked={props.checked}
                      unChecked={props.unChecked}
                      unLockPlayer={props.unLockPlayer}
                      changeFPTS={props.changeFPTS}
                      excluded={false}
                    />
                  ) : position === data.pos ? (
                    <PlayerListItem
                      data={data}
                      changeDvpColor={changeDvpColor}
                      expMin={expMin}
                      expMax={expMax}
                      handleExpMin={handleExpMin}
                      handleExpMax={handleExpMax}
                      lockPlayer={props.lockPlayer}
                      checked={props.checked}
                      unChecked={props.unChecked}
                      unLockPlayer={props.unLockPlayer}
                      changeFPTS={props.changeFPTS}
                      excluded={false}
                    />
                  ) : null;
                })}
              </tbody>
            ) : null}
            {myPlayer === true ? (
              <tbody>
                {props.myPlayer.map((data, index) => {
                  return position === "ALL" ? (
                    <PlayerListItem
                      data={data}
                      changeDvpColor={changeDvpColor}
                      expMin={expMin}
                      expMax={expMax}
                      handleExpMin={handleExpMin}
                      handleExpMax={handleExpMax}
                      lockPlayer={props.lockPlayer}
                      checked={props.checked}
                      unChecked={props.unChecked}
                      unLockPlayer={props.unLockPlayer}
                      changeFPTS={props.changeFPTS}
                      excluded={false}
                    />
                  ) : position === data.pos ? (
                    <PlayerListItem
                      data={data}
                      changeDvpColor={changeDvpColor}
                      expMin={expMin}
                      expMax={expMax}
                      handleExpMin={handleExpMin}
                      handleExpMax={handleExpMax}
                      lockPlayer={props.lockPlayer}
                      checked={props.checked}
                      unChecked={props.unChecked}
                      unLockPlayer={props.unLockPlayer}
                      changeFPTS={props.changeFPTS}
                      excluded={false}
                    />
                  ) : null;
                })}
              </tbody>
            ) : null}
            {myExclusion === true ? (
              <tbody>
                {props.excludedPlayer.map((data, index) => {
                  return position === "ALL" ? (
                    <PlayerListItem
                      data={data}
                      changeDvpColor={changeDvpColor}
                      expMin={expMin}
                      expMax={expMax}
                      handleExpMin={handleExpMin}
                      handleExpMax={handleExpMax}
                      lockPlayer={props.lockPlayer}
                      checked={props.checked}
                      unChecked={props.unChecked}
                      unLockPlayer={props.unLockPlayer}
                      changeFPTS={props.changeFPTS}
                      excluded={true}
                    />
                  ) : position === data.pos ? (
                    <PlayerListItem
                      data={data}
                      changeDvpColor={changeDvpColor}
                      expMin={expMin}
                      expMax={expMax}
                      handleExpMin={handleExpMin}
                      handleExpMax={handleExpMax}
                      lockPlayer={props.lockPlayer}
                      checked={props.checked}
                      unChecked={props.unChecked}
                      unLockPlayer={props.unLockPlayer}
                      changeFPTS={props.changeFPTS}
                      excluded={true}
                    />
                  ) : null;
                })}
              </tbody>
            ) : null}
            {lockedPlayer === true ? (
              <tbody>
                {props.lockedPlayer.map((data, index) => {
                  return position === "ALL" ? (
                    <PlayerListItem
                      data={data}
                      changeDvpColor={changeDvpColor}
                      expMin={expMin}
                      expMax={expMax}
                      handleExpMin={handleExpMin}
                      handleExpMax={handleExpMax}
                      lockPlayer={props.lockPlayer}
                      checked={props.checked}
                      unChecked={props.unChecked}
                      unLockPlayer={props.unLockPlayer}
                      changeFPTS={props.changeFPTS}
                      excluded={false}
                    />
                  ) : position === data.pos ? (
                    <PlayerListItem
                      data={data}
                      changeDvpColor={changeDvpColor}
                      expMin={expMin}
                      expMax={expMax}
                      handleExpMin={handleExpMin}
                      handleExpMax={handleExpMax}
                      lockPlayer={props.lockPlayer}
                      checked={props.checked}
                      unChecked={props.unChecked}
                      unLockPlayer={props.unLockPlayer}
                      changeFPTS={props.changeFPTS}
                      excluded={false}
                    />
                  ) : null;
                })}
              </tbody>
            ) : null}
          </table>
        </div>

        <div className="info">
          <div className="info-list">
            <span style={{ borderRight: "2px solid #707070" }}>
              <strong>{playersData.length}</strong> PLAYERS
            </span>
            <span>
              LAST UPDATED <strong>18/01/2021 4:51 AM</strong>
            </span>
          </div>

          <div>
            <span className="btn-reset">
              <i class="fa fa-times-circle"></i>RESET SETTINGS
            </span>
          </div>
        </div>
      </div>
      <style jsx>{`
        .table {
          width: 100%;
          margin-top: 2rem;
          cursor: pointer;
          color: #707070;
        }

        .table-top-span {
          display: block;
          color: #057df7;
          text-decoration: none;
          padding: 9px 25px;
          font-size: 13px;
          line-height: 18px;
          text-transform: uppercase;
          border: 2px solid transparent;
          border-radius: 18px;
          font-weight: 700;
          flex-grow: 1;
          text-align: center;
        }

        .table-tab {
          display: flex;
          width: 100%;
          background-color: #fff;
          border-radius: 18px;
        }

        .table-active {
          border-color: transparent;
          box-shadow: 0 0 0 2px #057df7;
        }

        .position-filter-container{
          padding-top: 1rem;
          display: flex;
          justify-content: space-between;
          align-items: baseline;
        }

        .position-filter{
          display: flex;
          align-items: center;
        }

        .position-filter span{
          display: inline-block;
          vertical-align: top;
          font-size: 13px;
          line-height: 15px;
          font-weight: bold;
          margin: 0 10px 0 0;
          color: #1a2226;
        }

        .list-length{
          margin-left: 5px;
          color: #000;
        }

        .position-holder{
          background: #fff;
          border-radius: 20px;
          font-size: 0;
          white-space: nowrap;
        }

        .position-filter-span{
          display: inline-block;
          vertical-align: top;
          margin: 0 -1px 0 0;
          min-width: 50px;
          padding: 10px 15px;
        }

        .position-filter-span-active{
          color: #057DF7 !important;
          box-shadow: 0 0 0 2px #057df7;
          opacity: 1;
          border-radius: 20px;
        }

        .search-player{
          border-radius: 20px;
          width: 290px !important;
          box-shadow: none;
          background: #fff;
          font-size: 13px;
          line-height: 18px;
          width: 100%;
          margin: 0;
          {/* color: #88A8D1 !important; */}
          height: 40px;
          padding: 10px 12px;
          border: 1px solid #ddd;
          transition: all .2s ease;
        }

        .search-player input{
          border: none;
          margin-left: 5px;
          color: #888 !important;
        }

        .table-container{
          position: relative;
          max-height: 804px !important;
          overflow: auto;
        }

        .table-players th {
          background: #2c3235;
          text-align: left;
          color: #fff;
          font-weight: 400;
          vertical-align: middle;
          height: 55px;
          border: none;
          position: sticky;
          top: 0;
        }

        .table-players td {
          vertical-align: middle;
          // background-color: #f5f5f5;
          border: none;
        }

        .table-players {
          font-size: 13px;
          margin-top: 1rem;
        }

        .chain-btn{
          display: inline-block;
          vertical-align: top;
          text-align: center;
          border-radius: 50%;
          width: 22px;
          height: 22px;
          background: #fff;
          color: #CBCBBB;
          cursor: pointer;
          padding: 2px 0 0;
          font-size: 14px;
          border: 1px solid #dedede;
        }

        .chain-btn:hover{
          background: #707070;
          border-color: #707070;
          color: #fff;
        }

        .chain-btn-active{
          background: #707070;
          border-color: #707070;
          color: #fff;
        }

        .lock-name{
          display: flex;
          align-item: baseline;
        }

        .lock-btn{
          display: inline-block;
          vertical-align: middle;
          text-align: center;
          border-radius: 50%;
          width: 22px;
          height: 22px;
          background: #fff;
          color: #CBCBBB;
          cursor: pointer;
          padding: 2px;
          font-size: 14px;
          border: 1px solid #dedede;
          margin-right: 0.1rem;
        }

        .lock-btn-active{
          background: #707070;
          border-color: #707070;
          color: #fff;
        }

        .lock-btn:hover{
          background: #707070;
          border-color: #707070;
          color: #fff;
        }
    

        .name-container {
          display: flex;
          justify-content: space-between;
        }

        .moodContainer {
          display: flex;
        }

        .mood-icon {
          width: 24px;
          height: 24px;
          cursor: pointer;
        }

        .mood-icon img {
          width: 100%;
          height: auto;
        }

        .team-icon-container {
          display: flex;
          justify-content: space-between;
          // width: 55px;
        }

        .table-text-input {
          width: 50px !important;
          height: 32px !important;
          text-align: center;
          border: 1px solid #dddddd !important;
        }

        .even {
          background-color: #fff !important;
        }

        .odd {
          background-color: #f5f5f5;
        }

        .red {
          background-color: #e6786e;
        }

        .light-red {
          background-color: #ea9076;
        }

        .orange {
          background-color: #f2c086;
        }

        .yellow {
          background-color: #faf096;
        }

        .dark-yellow {
          background-color: #dce694;
        }

        .light-green {
          background-color: #bedc92;
        }

        .green {
          background-color: #a0d290;
        }

        .dark-green {
          background-color: #82c88e;
        }

        .info {
          margin-bottom: 30px !important;
          margin-top: 1rem !important;
          display: flex;
          justify-content: space-between;
        }

        .info-list {
          float: left;
          text-transform: uppercase;
          font-size: 15px;
          line-height: 20px;
          overflow: hidden;
          padding: 0 0 10px;
        }

        .info span {
          padding: 0 20px;
          margin: 0 20px 0 -20px;
        }

        .btn-reset {
          text-transform: uppercase;
          color: #2c3235;
          font-size: 15px;
          line-height: 20px;
          font-weight: 700;
          cursor: pointer;
          display: inline-block;
          vertical-align: top;
          margin: 0 0 0 20px;
          transition: all 0.2s ease;
        }

        .btn-reset .fa {
          font-size: 18px;
          margin: 1px 5px 0 0;
          vertica l-align: top;
        }
      `}</style>
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(PlayerList);

{
  /* <tr className={index % 2 === 0 ? "even" : "odd"}>
                    <td>
                      <input type="checkbox" />
                    </td>
                    <td>
                      <img
                        className={
                          chain === chainUrl[1]
                            ? "chain-btn chain-btn-active"
                            : "chain-btn"
                        }
                        src={chain}
                        alt=""
                        onClick={handleChainClick}
                      />
                    </td>
                    <td>
                      <div className="name-container">
                        <div className="lock-name">
                          <img
                            className={
                              lock === lockUrl[0]
                                ? "lock-btn"
                                : "lock-btn lock-btn-active"
                            }
                            src={lock}
                            alt=""
                            onClick={handleLockClick}
                          />
                          <div>
                            <span>{data.name}</span>
                          </div>
                        </div>
                        <img
                          className="mood-icon"
                          src="https://domination.dfsarmy.com/images/mobile/mood-none.svg"
                          alt=""
                        />
                      </div>
                    </td>

                    <td>
                      <span>{data.pos}</span>
                    </td>

                    <td>
                      <div className="team-icon-container">
                        <img className="mood-icon" src={data.team} alt="" />
                      </div>
                    </td>

                    <td>vs</td>

                    <td>
                      <img className="mood-icon" src={data.opp} alt="" />
                    </td>

                    <td className={changeDvpColor(data.dvp)}>
                      <span>{data.dvp}</span>
                    </td>
                    <td>
                      <span>{data.salary}</span>
                    </td>

                    <td className={changeDvpColor(data.dollarFpts)}>
                      <span>{data.dollarFpts}</span>
                    </td>

                    <td>
                      <span>{data.projection}</span>
                    </td>

                    <td>
                      <span>{data.finalFpts}</span>
                    </td>

                    <td className={changeDvpColor(data.rating)}>
                      <span>{data.rating}</span>
                    </td>
                    <td>
                      <input
                        className="percent table-text-input"
                        type="text"
                        value={data.fpts}
                      />
                    </td>
                    <td>{data.projOwn}</td>
                    <td>
                      <input
                        className="percent table-text-input"
                        type="text"
                        value={expMin}
                        onChange={handleExpMin}
                      />
                    </td>
                    <td>
                      <input
                        className="percent table-text-input"
                        type="text"
                        value={expMax}
                        onChange={handleExpMax}
                      />
                    </td>
                  </tr> */
}
