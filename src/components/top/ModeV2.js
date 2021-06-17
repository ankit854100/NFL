import React, { useState, useEffect} from "react";
import "./mode.css";
import Option from "./Option";
import GameBox from "./GameBox";
import { game } from "../../data";
import selectTeam, {selectSlate, setClearSelected, setGames, setIcons, unselectTeam, setSlatePlayers, setClearSlatePlayer} from "../../redux/GameBox/actionContainer";
import {connect} from "react-redux";

const gameTypesDraftKings = ["CLASSIC", "TIERS", "SHOWDOWN"];

const gameTypesFanduel = ["CLASSIC", "SINGLEGAME"];

const mapStateToProps = (state) =>{
  return {
    selectedList: state.gamebox.selectedList,
    selectedSlate: state.gamebox.selectedSlate,
    games: state.gamebox.games,
    icons: state.gamebox.icons,
    slatePlayers: state.gamebox.slatePlayers
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    selectTeam : (value) => dispatch(selectTeam(value)),
    unselectTeam: (value) => dispatch(unselectTeam(value)),
    selectSlate: (value) => dispatch(selectSlate(value)),
    setClearSelected: () => dispatch(setClearSelected()),
    setGames: (value) => dispatch(setGames(value)),
    setIcons: (value) => dispatch(setIcons(value)),
    setSlatePlayers: (value) => dispatch(setSlatePlayers(value)),
    setClearSlatePlayer: (value) => dispatch(setClearSlatePlayer())
  };
}

function Mode(props) {
  const [option, setOption] = useState("main");
  const [site, setSite] = useState("");
  const [nfl, setNfl] = useState("");
  const [gameType, setGameType] = useState("CLASSIC");
  const [dropdownVal, setDropdownVal] = useState("select-slate");
  const [allGames, setAllGames] = useState(true);
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  const [isIconsLoaded, setIsIconsLoaded] = useState(false);
  const [iconsError, setIconsError] = useState(null);
  const [slates, setSlates] = useState([]);
  const [games, setGames] = useState([]);
  const [gameLoaded, setGameLoaded] = useState(false);
  const [gameError, setGameError] = useState(null);

  const [isPlayerLoaded, setIsPlayerLoaded] = useState(false);
  const [isPlayerError, setIsPlayerError] = useState(null);

  useEffect(() => {
    fetch("https://api.fantasynerds.com/v1/nfl/dfs-slates?apikey=TEST")
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result);
          // console.log(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )

      fetch("https://api.fantasynerds.com/v1/nfl/teams?apikey=TEST")
      .then(res => res.json())
      .then(
        (result) => {
          setIsIconsLoaded(true);
          props.setIcons(result);
        },
        (error) => {
          setIsIconsLoaded(true);
          setIconsError(error);
        }
      )

    
  }, [])

  const bgStyle = { backgroundColor: "#fff" };

  function handleSite(e) {
    let value = e.target.value;

    setNfl("");
    setDropdownVal("select-slate");
    setGameType("CLASSIC");

    setSite(value);

    if(isLoaded){
      if(value === "draftkings"){
        setSlates(items.platforms.draftkings);
        
      }
      else{
        setSlates(items.platforms.fanduel);
      }
    }
  }

  function handleNFL(e) {
    setNfl(e.target.value);
  }

  function handleGameType(e) {
    setGameType(e.target.value);
    setDropdownVal("select-slate");
  }

  function handleDropdown(e) {
    props.setClearSelected();
    // setMatchList([]);

    setDropdownVal(e.target.value);
    loadPlayersData();

    for(let i = 0; i < slates.length; i++){
      if(slates[i].slateId === e.target.value){
        props.selectSlate(slates[i]);
        // setSelectedSlate(slates[i]);
        getGames(slates[i]);
        break;
      }
    }
    
  }

  function getGames(slate){
    let tmp = [];
    fetch("https://api.fantasynerds.com/v1/nfl/schedule?apikey=TEST")
      .then(res => res.json())
      .then(
        (result) => {
          setGameLoaded(true);
          result.schedule.forEach((item, index) => {
            if(slate.slate_start === item.game_date){
              tmp.push(item);
              props.selectTeam(item.home_team);
              props.selectTeam(item.away_team);
            }
          })
        },
        (error) => {
          setGameLoaded(true);
          setGameError(error);
        }
      )
      setGames(tmp);
      props.setGames(tmp);
  }

  async function loadPlayersData(){
    fetch("https://api.fantasynerds.com/v1/nfl/dfs?apikey=TEST&slateId=")
      .then(res => res.json())
      .then(
        (result) => {
          setIsPlayerLoaded(true);
          props.setClearSlatePlayer();
          result.players.forEach((player, index) => {
              props.setSlatePlayers({...player, isChecked: false, isLocked: false});
          });
          
          props.allowPlayerList(true);
        },
        (error) => {
          setIsPlayerLoaded(true);
          setIsPlayerError(error);
        }
      )
  }

  function mainOnClick() {
    setOption("main");
  }

  function backtestOnClick() {
    setOption("backtest");
  }

  function handleAllGames() {
    if(allGames === false){
      setAllGames(true);
      games.forEach((item, index) => {
        props.selectTeam(item.home_team);
        props.selectTeam(item.away_team);
      });
    }
    else{
      setAllGames(false);
      props.setClearSelected();
    }
    
    
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

  function handleSlateMapping(slate){
    return <option value={slate.slate_start}>{slate.slate_start}</option>;
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
                    site === "draftkings"
                      ? "radio-inputContainer radio-active"
                      : "radio-inputContainer"
                  }
                >
                  <input
                    type="radio"
                    value="draftkings"
                    checked={site === "draftkings"}
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
                    site === "fanduel"
                      ? "radio-inputContainer radio-active"
                      : "radio-inputContainer"
                  }
                >
                  <input
                    type="radio"
                    value="fanduel"
                    checked={site === "fanduel"}
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
                  {site === "draftkings"
                    ? gameTypesDraftKings.map(handleGameTypeMapping)
                    : gameTypesFanduel.map(handleGameTypeMapping)}
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

            {nfl && isLoaded ? (
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
                      return <option value={slate.slateId}>{slate.slate_name} {slate.slate_start}</option>
                    })}
                  </select>
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </div>

      {nfl && dropdownVal !== "select-slate" && gameLoaded? (
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
            {games.map((data, index) => {
               
                {/* return (props.selectedSlate.slate_start === data.game_date ? 
                        <GameBox data={data} selected={allGames} icons = {teamIcons}/> : 
                        null); */}
                  return <GameBox data={data} selected={allGames} icons = {props.icons} selectTeam={props.selectTeam} unselectTeam={props.unselectTeam}/>
            })} 
          </div>
        </div>
      ) : null}
    </React.Fragment>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Mode);