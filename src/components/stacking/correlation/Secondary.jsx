import React from "react";

export default function (props) {

  function crossDeleteHandler(){
    props.onDelete(props.id);
  }

  return (
    <div className="secondary">
      {/* <div> */}
      <div>
        <strong style={{ marginRight: "14px" }}>Secondary Stack:</strong>{" "}
        <span className="secondary-radio-wrapper">
          <input type="radio" />
          <span>None</span>
        </span>
        <span className="secondary-radio-wrapper">
          <input type="radio" />
          <span>1</span>
        </span>
        <span className="secondary-radio-wrapper">
          <input type="radio" />
          <span>2</span>
        </span>
        <span className="secondary-cross-container" onClick={crossDeleteHandler}>
          <i class="fa fa-times-circle"></i>
        </span>
      </div>
      <div className="secondary-list">
        <div>
          <input type="checkbox" />{" "}
          <strong>RB + Opposing team pass catcher (WR,TE)</strong>
        </div>
        <div>
          <input type="checkbox" />{" "}
          <strong>WR + Opposing team pass catcher (WR,TE)</strong>
        </div>
        <div>
          <input type="checkbox" /> <strong>RB + WR same team</strong>
        </div>
        <div>
          <input type="checkbox" /> <strong>RB + DEF same team</strong>
        </div>
        <div>
          <input type="checkbox" />{" "}
          <strong>Pass catcher (WR,TE) + pass catcher (WR,TE) same team</strong>
        </div>
      </div>
      <div>
        <input type="checkbox" style={{ marginRight: "0.25rem" }} />
        <strong>
          Correlation Boost <i class="fa fa-info-circle"></i>
        </strong>
        <div className="secondary-bottom">
          <div>
            <strong>Stack</strong>
            {"  "}
            <strong className="correlation-position-wrapper">QB</strong>
            <select
              className="dropdown"
              style={{ color: "#000", fontSize: "13px", width: "18.75rem" }}
            >
              <option disabled selected>
                select players
              </option>
              <option>Patrick Mahomes</option>
              <option>Aaron Rodgers</option>
            </select>
            <strong>in min</strong>
            <input
              type="text"
              value="1"
              className="correlation-position-wrapper"
              style={{ backgroundColor: "#fff", width: "64px" }}
            />
            <strong>lineups</strong>
            <div className="team-game-wrapper">
              <span className="secondary-radio-wrapper">
                <input type="radio" />
                <span>Team</span>
              </span>
              <span className="secondary-radio-wrapper">
                <input type="radio" />
                <span>Game</span>
              </span>
            </div>
          </div>
          <div>
            <strong>No less than</strong>
            <select
              className="dropdown"
              style={{ fontSize: "13px", width: "8rem", marginLeft: "10px" }}
            >
              <option>1 player</option>
              <option>2 player</option>
              <option>3 player</option>
            </select>
            <strong>No more than</strong>
            <select
              className="dropdown"
              style={{ fontSize: "13px", width: "8rem", marginLeft: "10px" }}
            >
              <option>1 player</option>
              <option>2 player</option>
              <option selected>3 player</option>
            </select>
            <strong>of</strong>
            <strong
              className="correlation-position-wrapper"
              style={{ marginRight: "0" }}
            >
              QB
            </strong>
            <strong
              className="correlation-position-wrapper"
              style={{ marginLeft: "0", marginRight: "0" }}
            >
              TE
            </strong>
            <strong
              className="correlation-position-wrapper"
              style={{ marginLeft: "0" }}
            >
              RB
            </strong>
            <strong>from the Same Team</strong>
          </div>
        </div>
        {/* </div>s */}
      </div>
      <style jsx>{`
        .secondary {
          padding: 1rem 0;
          position: relative;
          // border-top: 1px solid #707070;
        }

        .secondary-radio-wrapper {
          margin: 13px 14px 0 0;
          font-size: 13px;
        }

        .secondary-radio-wrapper input {
          margin-right: 3px;
        }

        .secondary-cross-container {
          position: absolute;
          right: 0;
          font-size: 20px;
          cursor: pointer;
        }

        .secondary-cross-container .fa:hover {
          color: red;
        }

        .secondary-list {
          padding: 1rem 0;
          font-size: 13px;
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
        }

        .secondary-list input {
          margin-right: 0.25rem;
        }

        .secondary-list div {
          display: flex;
          align-items: baseline;
          padding-top: 0.5rem;
          // padding-bottom: 0.5rem;
          padding-right: 1rem;
        }

        .secondary-bottom {
          padding: 1rem 0;
        }

        .team-game-wrapper {
          display: inline-block;
          margin-left: 80px;
        }
      `}</style>
    </div>
  );
}
