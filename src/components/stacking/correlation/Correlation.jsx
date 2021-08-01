import React, { useState } from "react";
// import "./stacking.css";
import {connect} from "react-redux";
import Secondary from "./Secondary";
import SecondaryV2 from "./SecondaryV2";
import Button from "react-bootstrap/Button";
import {setCorrelation} from "../../../redux/stack/actionContainer";

const mapStateToProps = (state) => {
  return {
    total: state.table.total,
    games: state.gamebox.games,
    correlationArray: state.stack.correlationArray
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setCorrelation: (value) => dispatch(setCorrelation(value))
  };
};


function Correlation(props) {
  const [correlation, setCorrelation] = useState(false);
  // const [rules, setRules] = useState([]);
  const [second, setSecond] = useState(false);
  const [primary, setPrimary] = useState(true);

  function handleCorrelation() {
    setCorrelation(!correlation);
  }

  function handlePrimary(){
    if(primary === true){
      setPrimary(false);
      props.setCorrelation(0);
    }
    else{
      setPrimary(true);
      props.setCorrelation(1);
    }
  }

  function handleRuleClick() {
    setSecond(true);    
  }

  function deleteFromStackingArray(index){
    setSecond(false);

  }

  return (
    <React.Fragment>
      <div>
        <div className="stacking">
          {correlation ? (
            <div>
              <div>
                <span
                  className="stacking-filter"
                  style={{ float: "right" }}
                  onClick={handleCorrelation}
                >
                  <i className="fa fa-times-circle"></i> CLOSE STACKING OPTIONS
                </span>
              </div>
              <br></br>
              <div className="stacking-wrapper">
                <div className="stacking-wrapper-top">
                  <h3>CREATE NEW RULE</h3>
                </div>
                <div className="correlation-wrapper-bottom">
                  <div>
                    <strong className="stacking-filter-title">
                      Universal Rule <i class="fa fa-info-circle"></i>
                    </strong>
                  </div>
                  <div style={{ display: "block" }}>
                    <input type="checkbox" checked={primary} onChange={handlePrimary}/>{" "}
                    <strong>stack</strong>
                    <strong className="correlation-position-wrapper">QB</strong>
                    <strong>with atleast one of</strong>
                    <strong
                      className="correlation-position-wrapper"
                      style={{ marginRight: "0" }}
                    >
                      WR
                    </strong>
                    <strong
                      className="correlation-position-wrapper"
                      style={{ marginLeft: "0" }}
                    >
                      TE
                    </strong>
                    {"  "}
                    <strong>Same Team. Include 1 Secondary Stack.</strong>
                  </div>
                </div>
                {/* {rules.map((data, index) => {
                  console.log(data);
                  return (
                    <div className="correlation-wrapper-bottom correlation-border-top">
                      <Secondary id={data} onDelete={deleteFromStackingArray}/>
                    </div>
                  );
                })} */}
                {second &&
                  <div className="correlation-wrapper-bottom correlation-border-top">
                      <Secondary onDelete={deleteFromStackingArray}/>
                  </div>
                }
                {props.correlationArray.length > 0 &&
                  <div className="correlation-wrapper-bottom">
                      {props.correlationArray.map(item => {
                        return <SecondaryV2 data={item} onDelete={deleteFromStackingArray}/>;
                      })}
                  </div>
                }
                <div className="correlation-add-rule" onClick={handleRuleClick}>
                  <Button variant="primary" className="rule-button">
                    ADD RULE
                  </Button>
                </div>
              </div>
            </div>
          ) : (
            <span className="stacking-filter" onClick={handleCorrelation}>
              <i className="fa fa-cog"></i> CORRELATION STACKING OPTIONS
            </span>
          )}
        </div>
        <style jsx>{`
          .correlation-wrapper-bottom {
            color: #707070;
            background-color: #f5f6fa;
            padding: 1rem;
          }

          .correlation-position-wrapper {
            box-shadow: none;
            background: #e9e8e8;
            font-size: 13px;
            line-height: 18px;
            width: 100%;
            margin: 0;
            color: #888;
            height: 40px;
            padding: 10px;
            border: 1px solid #ddd;
            transition: all 0.2s ease;
            margin-right: 10px;
            margin-left: 10px;
          }

          .correlation-border-top {
            border-top: 1px solid #dddddd;
          }

          .correlation-add-rule {
            padding: 0 1rem 1rem;
            background-color: #f5f6fa;
            text-align: right;
          }
        `}</style>
      </div>
    </React.Fragment>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Correlation);