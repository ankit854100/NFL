import React, { useState, useEffect } from "react";

export default function (props) {
  const [team, setTeam] = useState(props.selected);
  const [opp, setOpp] = useState(props.selected);
  const [homeIcon, setHomeIcon] = useState("");
  const [awayIcon, setAwayIcon] = useState("");

  useEffect(() => {
    setTeam(props.selected);
    setOpp(props.selected);

    props.icons.forEach((item, index) => {
      if(item.team_code === props.data.home_team){
        setHomeIcon(item.logo_standard);
      }
      if(item.team_code === props.data.away_team){
        setAwayIcon(item.logo_standard);
      }
    })

  }, [props.selected]);

  function handleTeamClick() {
    if(team === true){
      setTeam(false);
      props.unselectTeam(props.data.home_team);
    }
    else{
      setTeam(true);
      props.selectTeam(props.data.home_team);
    }
  }

  function handleOppClick() {
    if(opp === true){
      setOpp(false);
      props.unselectTeam(props.data.away_team);
    }
    else{
      setOpp(true);
      props.selectTeam(props.data.away_team);
    }
  }
  return (
    <React.Fragment>
        <div className="filter-box" style={{ backgroundColor: props.data.bg }}>
        <div className="filter-box-top">
          <div
            className={team ? "team game-selected" : "team"}
            onClick={handleTeamClick}
          >
            <div className="team-logo">
              <img
                // src="https://domination.dfsarmy.com/images/teams/nfl/min.svg"
                src={homeIcon}
                alt=""
              />
            </div>
            <div className="team-content">
              <span>spread:</span>
              <strong>{3}</strong>
            </div>
          </div>

          <div
            className={opp ? "team game-selected" : "team"}
            onClick={handleOppClick}
          >
            <div className="team-logo">
              <img
                // src="https://domination.dfsarmy.com/images/teams/nfl/min.svg"
                src={awayIcon}
                alt=""
              />
            </div>
            <span>spread:</span>
            <strong>{-3}</strong>
          </div>

          <span className="vs-text">＠</span>
        </div>

        <div className="filter-box-mid">
          <span>{props.data.game_date}</span>
          {/* <span>{props.data.time}</span> */}
        </div>

        {/* <div > */}
        <div className="filter-box-bottom">
          <span>Total: {parseFloat(props.data.away_score) + parseFloat( props.data.home_score)}</span>
        </div>
      </div>
      <style jsx>{`
       
        .filter-box-mid span{
          max-width: 80px;
        }
      `}</style>
      {/* </div> */}
    </React.Fragment>
  );
}
