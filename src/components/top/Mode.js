import React, { useState } from "react";
import "./mode.css";
import Option from "./Option";
import GameBox from "./GameBox";
import { game } from "../../data";

const gameTypesDraftKings = ["CLASSIC", "TIERS", "SHOWDOWN"];

const gameTypesDraftfanduel = ["CLASSIC", "SINGLEGAME"];

const slates = ["sun", "mon", "tue"];

// const games = [
//   {
//     icon1: "https://domination.dfsarmy.com/images/teams/nfl/min.svg",
//     icon2: "https://domination.dfsarmy.com/images/teams/nfl/lar.svg",
//     score1: "7",
//     score2: "3.5",
//     date: "2021-01-09",
//     time: "13:05:00",
//     total: "50.5",
//     bg: "#BADFAF"
//   },
//   {
//     icon1: "https://domination.dfsarmy.com/images/teams/nfl/ind.svg",
//     icon2: "https://domination.dfsarmy.com/images/teams/nfl/buf.svg",
//     score1: "4",
//     score2: "5",
//     date: "2021-01-11",
//     time: "14:05:00",
//     total: "40",
//     bg: "#F2C086"
//   }
// ];

export default function () {
  const [option, setOption] = useState("main");
  const [site, setSite] = useState("");
  const [nfl, setNfl] = useState("");
  const [gameType, setGameType] = useState("CLASSIC");
  const [dropdownVal, setDropdownVal] = useState("select-slate");
  const [allGames, setAllGames] = useState(true);

  const bgStyle = { backgroundColor: "#fff" };

  function handleSite(e) {
    let value = e.target.value;

    setNfl("");
    setDropdownVal("select-slate");
    setGameType("CLASSIC");

    setSite(value);
  }

  function handleNFL(e) {
    setNfl(e.target.value);
  }

  function handleGameType(e) {
    setGameType(e.target.value);
    setDropdownVal("select-slate");
    // console.log(e.target.value);
  }

  function handleDropdown(e) {
    setDropdownVal(e.target.value);

    // console.log(dropdownVal);
  }

  function mainOnClick() {
    setOption("main");
  }

  function backtestOnClick() {
    setOption("backtest");
  }

  function handleAllGames() {
    setAllGames(!allGames);
  }

  function handleGameTypeMapping(select) {
    return (
      <div style={{ minHeight: "48px" }}>
        <div
          className={
            gameType === select
              ? "radio-inputContainer radio-active"
              : "radio-inputContainer"
          }
        >
          <input
            type="radio"
            value={select}
            checked={gameType === select}
            onChange={handleGameType}
          />
          <span>{select}</span>
        </div>
      </div>
    );
  }

  return (
    <React.Fragment>
      <div className="top-wrapper">
        <div className="wrapper">
          <span className="mode">mode:</span>
          <div className="option-container">
            <span
              onClick={mainOnClick}
              className={
                option === "main" ? "mode-option active" : "mode-option"
              }
            >
              MAIN
            </span>
            <span
              onClick={backtestOnClick}
              className={
                option === "backtest" ? "mode-option active" : "mode-option"
              }
            >
              BACKTEST
            </span>
          </div>
        </div>

        <div className="choice-wrapper">
          {/* sites */}
          <div style={{ width: "60%" }}>
            {/* draftKings */}
            <div className="choice">
              <h2 style={{ color: "#057df7" }}>SITE</h2>
              <div>
                <div
                  className={
                    site === "DraftKings"
                      ? "radio-inputContainer radio-active"
                      : "radio-inputContainer"
                  }
                >
                  <input
                    type="radio"
                    value="DraftKings"
                    checked={site === "DraftKings"}
                    onChange={handleSite}
                  />
                  <img
                    className="image"
                    src="https://domination.dfsarmy.com/images/mobile/logo-draftkings.png"
                    alt=""
                  />
                </div>

                {/* fanduel */}
                <div
                  className={
                    site === "Fanduel"
                      ? "radio-inputContainer radio-active"
                      : "radio-inputContainer"
                  }
                >
                  <input
                    type="radio"
                    value="Fanduel"
                    checked={site === "Fanduel"}
                    onChange={handleSite}
                  />
                  <img
                    className="image"
                    src="https://domination.dfsarmy.com/images/mobile/logo-fanduel.png"
                    alt=""
                  />
                </div>
              </div>
            </div>

            {nfl ? (
              <div className="choice">
                <h2 style={{ color: "#057df7" }}>GAME TYPES</h2>
                <div>
                  {site === "DraftKings"
                    ? gameTypesDraftKings.map(handleGameTypeMapping)
                    : gameTypesDraftfanduel.map(handleGameTypeMapping)}
                </div>
              </div>
            ) : null}
          </div>
          <div>
            {site ? (
              // nfl
              <div className="choice">
                <h2 style={{ color: "#057df7" }}>SPORTS</h2>
                <div>
                  <div
                    className={
                      nfl === "nfl"
                        ? "radio-inputContainer radio-active"
                        : "radio-inputContainer"
                    }
                  >
                    <input
                      type="radio"
                      value="nfl"
                      checked={nfl === "nfl"}
                      onChange={handleNFL}
                    />
                    <img
                      className="image"
                      src="https://domination.dfsarmy.com/images/mobile/ta-nfl.svg"
                      alt=""
                    />
                    <span>nfl</span>
                  </div>
                </div>
              </div>
            ) : null}

            {nfl ? (
              <div className="choice">
                <h2 style={{ color: "#057df7" }}>SLATES</h2>
                <div>
                  <select
                    className="slate-dropdown"
                    value={dropdownVal}
                    onChange={handleDropdown}
                  >
                    <option value="select-slate">-Select Slate-</option>
                    {slates.map((slate) => {
                      return <option value={slate}>{slate}</option>;
                    })}
                  </select>
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </div>

      {nfl && dropdownVal !== "select-slate" ? (
        <div className="games choice">
          <h2 style={{ color: "#057df7" }}>GAMES FILTERS</h2>
          <div className="game-filter">
            <div
              className={
                allGames ? "game-filter-all game-selected" : "game-filter-all"
              }
              onClick={handleAllGames}
            >
              <span>All games</span>
            </div>
            {game.map((data, index) => {
              return <GameBox data={data} selected={allGames} />;
            })}
          </div>
        </div>
      ) : null}
    </React.Fragment>
  );
}
