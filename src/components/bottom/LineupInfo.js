import React, { useEffect, useState } from "react";
import { totalLineUps, lineup } from "../../data";

export default function LineupInfo(props) {
  const [l1, setL1] = useState(props.data.isChecked);

  useEffect(() => {
    setL1(props.data.isChecked);  
  },[props.data.isChecked]);

  function handleL1() {
    if(l1 === true){
      setL1(false);
      props.setUnChecked(props.data.id);
    }
    else{
      setL1(true);
      props.setIsChecked(props.data.id);
    }
  }
  return (
    <React.Fragment>
          <div>
            <div className="bottom-section-second-top">
              <span>
                <input
                  type="checkbox"
                  checked={l1}
                  onChange={handleL1}
                />
                <span style={{ color: "#0075FF" }}> L{props.data.id}</span>
              </span>
              <span>
                <strong>Projection:</strong> {props.data.projection}
              </span>
              <span>
                <strong>Salary:</strong> {props.data.salary}
              </span>
              <span>
                <strong>FPTs:</strong> {props.data.fpts}
              </span>
              <span>
                <strong>Final:</strong> {props.data.final}
              </span>
              <span>
                <strong>Total pOwn:</strong> {props.data.totalPown}
              </span>
              <span onClick={() => {
                props.setIsDelete(props.data.id);
              }}>
                <i class="fa fa-trash" style={{ fontSize: "16px" }}></i>
              </span>
            </div>
            <div className="bottom-section-second-table">
              <table>
                <thead>
                  <tr>
                    <th>Pos</th>
                    <th style={{ width: "180px" }}>Name</th>
                    <th>Team</th>
                    <th>Salary</th>
                    <th>Fpts</th>
                    <th>Final</th>
                    <th>pOwn%</th>
                  </tr>
                </thead>
                <tbody>
                  {props.data.players.map((data, index) => {
                    return (
                      <tr className={index % 2 === 0 ? "odd" : "even"}>
                        <td>{data.pos}</td>
                        <td>
                          <strong>{data.name}</strong>
                        </td>
                        <td>
                          <img className="mood-icon" src={data.team} alt="" />
                        </td>
                        <td>{props.data.salary}</td>
                        <td>{data.fpts}</td>
                        <td>{data.final}</td>
                        <td>{data.projOwn}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
          <style jsx>{`
        .bottom-section-second {
          padding-left: 1rem;
          height: 766px !important;
          overflow: auto;
        }
        .bottom-section-second-top {
          background-color: #2c3235;
        }

        .bottom-section-second-top {
          color: #fff;
          font-size: 12px;
          font-weight: 400;
          display: flex;
          justify-content: space-evenly;
          align-item: baseline;
          padding-top: 0.25rem;
          padding-bottom: 0.25rem;
        }

        .bottom-section-second-top strong {
          color: #dce694;
          font-size: 12px;
          font-weight: 400;
        }

        .bottom-section-second-table th {
          background: #2c3235;
          text-align: left;
          color: #fff;
          font-weight: 400;
          vertical-align: middle;
          // height: 55px;
          padding: 0.25rem;
          border: none;
          text-align: left;
        }

        .bottom-section-second-table table {
          font-size: 13px;
          color: #707070;
          width: 100%;
        }

        .bottom-section-second-table td {
          padding: 0.25rem;
          // text-align: center;
        }
      `}</style>
    </React.Fragment>
  );
}

{/* <div className="bottom-section-second">
      {totalLineUps.map((total) => {
        return (
          <div>
            <div className="bottom-section-second-top">
              <span>
                <input
                  type="checkbox"
                  defaultChecked={l1}
                  onChange={handleL1}
                />
                <span style={{ color: "#0075FF" }}> L1</span>
              </span>
              <span>
                <strong>Projection:</strong> {total.Projection}
              </span>
              <span>
                <strong>Salary:</strong> {total.Salary}
              </span>
              <span>
                <strong>FPTs:</strong> {total.FPTs}
              </span>
              <span>
                <strong>Final:</strong> {total.total}
              </span>
              <span>
                <strong>Total pOwn:</strong> 118
              </span>
              <span>
                <i class="fa fa-trash" style={{ fontSize: "16px" }}></i>
              </span>
            </div>
            <div className="bottom-section-second-table">
              <table>
                <thead>
                  <tr>
                    <th>Pos</th>
                    <th style={{ width: "180px" }}>Name</th>
                    <th>Team</th>
                    <th>Salary</th>
                    <th>Fpts</th>
                    <th>Final</th>
                    <th>pOwn%</th>
                  </tr>
                </thead>
                <tbody>
                  {lineup.map((data, index) => {
                    return (
                      <tr className={index % 2 === 0 ? "odd" : "even"}>
                        <td>{data.Pos}</td>
                        <td>
                          <strong>{data.name}</strong>
                        </td>
                        <td>
                          <img className="mood-icon" src={data.team} alt="" />
                        </td>
                        <td>50000</td>
                        <td>{data.Fpts}</td>
                        <td>37.3</td>
                        <td>9.47%</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        );
      })}
      <style jsx>{`
        .bottom-section-second {
          padding-left: 1rem;
          height: 766px !important;
          overflow: auto;
        }
        .bottom-section-second-top {
          background-color: #2c3235;
        }

        .bottom-section-second-top {
          color: #fff;
          font-size: 12px;
          font-weight: 400;
          display: flex;
          justify-content: space-evenly;
          align-item: baseline;
          padding-top: 0.25rem;
          padding-bottom: 0.25rem;
        }

        .bottom-section-second-top strong {
          color: #dce694;
          font-size: 12px;
          font-weight: 400;
        }

        .bottom-section-second-table th {
          background: #2c3235;
          text-align: left;
          color: #fff;
          font-weight: 400;
          vertical-align: middle;
          // height: 55px;
          padding: 0.25rem;
          border: none;
          text-align: left;
        }

        .bottom-section-second-table table {
          font-size: 13px;
          color: #707070;
          width: 100%;
        }

        .bottom-section-second-table td {
          padding: 0.25rem;
          // text-align: center;
        }
      `}</style>
    </div>
  ); */}
