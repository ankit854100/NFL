import React, { useState } from "react";
import Slider from "@material-ui/core/Slider";

export default function RangeSlider(props) {
  const [value, setValue] = useState([props.min, props.max]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    props.callBack(value);
  }; 

  function onChangeLow(e) {
    setValue([parseFloat(e.target.value), value[1]]);
    props.callBack([parseFloat(e.target.value), value[1]]);
  }

  function onChangeHigh(e) {
    setValue([value[0], parseFloat(e.target.value)]);
    props.callBack([value[0], parseFloat(e.target.value)]);
  }
  return (
    <div style={{ width: "100%" }}>
      <Slider
        value={value}
        min={props.min}
        max={props.max}
        step={props.step}
        onChange={handleChange}
        valueLabelDisplay="auto"
        aria-labelledby="range-slider"
      />
      <div className="input-range-container">
        <input
          className="range"
          type="text"
          value={value[0]}
          onChange={onChangeLow}
        />
        <input
          className="range"
          type="text"
          value={value[1]}
          onChange={onChangeHigh}
        />
      </div>
      <style jsx>{`
        .input-range-container {
          display: flex;
          justify-content: space-between;
        }

        .range {
          border: 1px solid #707070;
          color: #707070;
          height: 26px;
          padding: 4px 5px;
          width: 55px;
        }

        .MuiSlider-root {
          color: #007bff;
        }
      `}</style>
    </div>
  );
}
