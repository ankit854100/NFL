import React, { useState, useEffect } from "react";
import { changeFPTS } from "../../redux/PlayerTableItem/ActionContainer";

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
  const [lock, setLock] = useState(lockUrl[0]);
  const [select, setSelect] = useState(props.data.isChecked);
  const [fpts, setFpts] = useState(props.data.fpts);

  // useEffect(() => {
  //   console.log("rendered from playerListItem");
  // });

  function handleFptsChange(e) {
    setFpts(e.target.value);
    props.changeFPTS({ id: props.data.id, fpts: e.target.value });
  }

  function handleChainClick() {
    if (chain === chainUrl[0]) setChain(chainUrl[1]);
    else setChain(chainUrl[0]);
  }

  function handleLockClick() {
    if (lock === lockUrl[0]) {
      setLock(lockUrl[1]);
      props.lockPlayer(props.data);
      setSelect(true);
      props.checked(props.data);
    } else {
      setLock(lockUrl[0]);
      props.unLockPlayer(props.data);
      setSelect(false);
      props.unChecked(props.data);
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
              <img
                className={
                  lock === lockUrl[0] ? "lock-btn" : "lock-btn lock-btn-active"
                }
                src={lock}
                alt=""
                onClick={handleLockClick}
              />
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
          <span>{props.data.pos}</span>
        </td>

        <td>
          <div className="team-icon-container">
            <img className="mood-icon" src={props.data.team} alt="" />
          </div>
        </td>

        <td>vs</td>

        <td>
          <img className="mood-icon" src={props.data.opp} alt="" />
        </td>

        <td className={props.changeDvpColor(props.data.dvp)}>
          <span>{props.data.dvp}</span>
        </td>
        <td>
          <span>{props.data.salary}</span>
        </td>

        <td className={props.changeDvpColor(props.data.dollarFpts)}>
          <span>{props.data.dollarFpts}</span>
        </td>

        <td>
          <span>{props.data.projection}</span>
        </td>

        <td>
          <span>{props.data.finalFpts}</span>
        </td>

        <td className={props.changeDvpColor(props.data.rating)}>
          <span>{props.data.rating}</span>
        </td>
        <td>
          <input
            className="percent table-text-input"
            type="text"
            value={fpts}
            onChange={handleFptsChange}
          />
        </td>
        <td>{props.data.projOwn}</td>
        <td>
          <input
            className="percent table-text-input"
            type="text"
            value={props.expMin}
            onChange={props.handleExpMin}
          />
        </td>
        <td>
          <input
            className="percent table-text-input"
            type="text"
            value={props.expMax}
            onChange={props.handleExpMax}
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
