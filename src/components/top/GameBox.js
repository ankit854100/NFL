import React, { useState, useEffect } from "react";

export default function (props) {
  const [team, setTeam] = useState(props.selected);
  const [opp, setOpp] = useState(props.selected);

  useEffect(() => {
    setTeam(props.selected);
    setOpp(props.selected);
  }, [props.selected]);

  function handleTeamClick() {
    setTeam(!team);
  }

  function handleOppClick() {
    setOpp(!opp);
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
                src={props.data.team}
                alt=""
              />
            </div>
            <div className="team-content">
              <span>spread:</span>
              <strong>{props.data.teamSpread}</strong>
            </div>
          </div>

          <div
            className={opp ? "team game-selected" : "team"}
            onClick={handleOppClick}
          >
            <div className="team-logo">
              <img
                // src="https://domination.dfsarmy.com/images/teams/nfl/min.svg"
                src={props.data.opp}
                alt=""
              />
            </div>
            <span>spread:</span>
            <strong>{props.data.oppSpread}</strong>
          </div>

          <span className="vs-text">＠</span>
        </div>

        <div className="filter-box-mid">
          <span>{props.data.date}</span>
          <span>{props.data.time}</span>
        </div>

        {/* <div > */}
        <div className="filter-box-bottom">
          <span>Total: {props.data.total}</span>
        </div>
      </div>
      <style jsx>{``}</style>
      {/* </div> */}
    </React.Fragment>
  );
}
