import React, { useState, useEffect } from "react";

const chainUrl = [
  "https://image.flaticon.com/icons/png/128/3100/3100349.png",
  "https://image.flaticon.com/icons/png/128/115/115771.png"
];

const lockUrl = [
  "https://image.flaticon.com/icons/png/128/633/633669.png",
  "https://image.flaticon.com/icons/png/128/1828/1828415.png"
];

export default function PlayerListItem(props) {
  const [chain, setChain] = useState(chainUrl[0]);
  const [lock, setLock] = useState(props.data.isLocked);
  const [select, setSelect] = useState(props.data.isChecked);
  const [fpts, setFpts] = useState(props.data.proj_pts_aggressive);
  const [icon, setIcon] = useState({});
  const [awayIcon, setAwayIcon] = useState({});
  const [expMin, setExpMin] = useState(props.data.min_exp);
  const [expMax, setExpMax] = useState(props.data.max_exp);

  useEffect(() => {
    setSelect(props.data.isChecked);
    setLock(props.data.isLocked);
    
    const tmp = props.icons.filter((item) => item.team_code === props.data.team);
    setIcon(tmp[0].logo_standard);

    props.games.forEach((item) => {
      if(item.home_team === props.data.team){
        const tmp = props.icons.filter((data) => data.team_code === item.away_team);
        setAwayIcon(tmp[0].logo_standard);
      }
      else if(item.away_team === props.data.team){
        const tmp = props.icons.filter((data) => data.team_code === item.home_team);
        setAwayIcon(tmp[0].logo_standard);
      }
    })
  });

  function handleExpMin(e){
    setExpMin(e.target.value);
    props.handleExpMin({data: props.data, expMin: e.target.value});
  }

  function handleExpMax(e){
    setExpMax(e.target.value);
    props.handleExpMax({data: props.data, expMax: e.target.value});
  }

  function handleFptsChange(e) {
    setFpts(e.target.value);
    // props.changeFPTS({ id: props.data.playerId, fpts: e.target.value });
    props.changeFPTS({data: props.data, fpts: e.target.value});
  }

  function handleChainClick() {
    if (chain === chainUrl[0]) setChain(chainUrl[1]);
    else setChain(chainUrl[0]);
  }

  function handleLockClick() {
    if (lock === false) {
      setLock(true);
      props.lockPlayer(props.data);
      setSelect(true);
      props.checked(props.data);
      props.setCalculateCost();
    } else {
      setLock(false);
      props.unLockPlayer(props.data);
      setSelect(false);
      // props.unChecked(props.data);
      props.setCalculateCost();
    }
  }

  function handleSelectChange() {
    if (select === true) {
      setSelect(false);
      props.unChecked(props.data);
    } else {
      setSelect(true);
      props.checked(props.data);
    }
  }

  return (
    <React.Fragment>
      <tr className={props.index % 2 === 0 ? "even" : "odd"}>
        <td>
          {props.excluded === false ? 
            <input
              type="checkbox"
              checked={select}
              onChange={handleSelectChange}
            /> :
            <span className="excl">
              <i class="badge-exc">!</i>
            </span>
            }
        </td>
        <td>
          <img
            className={
              chain === chainUrl[1] ? "chain-btn chain-btn-active" : "chain-btn"
            }
            src={chain}
            alt=""
            onClick={handleChainClick}
          />
        </td>
        <td>
          <div className="name-container">
            <div className="lock-name">
              {props.excluded === false ? 
                <img
                  className={
                    lock === false ? "lock-btn" : "lock-btn lock-btn-active"
                  }
                  src={lock === false? lockUrl[0]: lockUrl[1]}
                  alt=""
                  onClick={handleLockClick}
                />
              :
                <img
                    className={
                      lock === false ? "lock-btn" : "lock-btn lock-btn-active"
                    }
                    src={lock === false? lockUrl[0]: lockUrl[1]}
                    alt=""
                />
              }
              {}
              <div>
                <span>{props.data.name}</span>
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
          <span>{props.data.position}</span>
        </td>

        <td>
          <div className="team-icon-container">
            <img className="mood-icon" src={icon} alt="" />
          </div>
        </td>

        <td>vs</td>

        <td>
          <img className="mood-icon" src={awayIcon} alt="" />
        </td>

        <td className={props.changeDvpColor(props.data.dvp)}>
          <span>{props.data.dvp}</span>
        </td>
        <td>
          <span>{props.data.salary}</span>
        </td>

        <td className={props.changeDvpColor(props.data.proj_pts_conservative)}>
          <span>{props.data.proj_pts_conservative}</span>
        </td>

        <td>
          <span>{props.data.proj_pts}</span>
        </td>

        <td>
          <span>{props.data.proj_pts_aggressive}</span>
        </td>

        <td className={props.changeDvpColor(0)}>
          <span>{0}</span>
        </td>
        <td>
          <input
            className="percent table-text-input"
            type="text"
            value={fpts}
            onChange={handleFptsChange}
          />
        </td>
        <td>{props.data.ownership}</td>
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
      </tr>
      <style jsx>{`
        .excl{
          background: #707070;
          border-radius: 50%;
          color: #fff;
          text-transform: uppercase;
          font-style: normal;
          display: inline-block;
          vertical-align: top;
          padding: 4px 3px;
          font-size: 12px;
          line-height: 18px;
          font-weight: 700;
          text-align: center;
          min-width: 26px;
        }
      `}</style>
    </React.Fragment>
  );
}
