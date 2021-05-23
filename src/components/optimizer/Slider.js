import React, { useState } from "react";
import Slider from "@material-ui/core/Slider";

export default function DiscreteSlider(props) {
  const [value, setValue] = useState(props.min);

  function handleChange(e, newValue) {
    setValue(newValue);
    props.callBack(value);
  }

  function handleInputChange(e) {
    setValue(e.target.value);
    props.callBack(parseFloat(e.target.value));
  }

  return (
    <div style={{ width: "100%" }}>
      <Slider
        value={value}
        min={props.min}
        max={props.max}
        step={props.step}
        onChange={handleChange}
        aria-labelledby="discrete-slider-restrict"
        valueLabelDisplay="auto"
      />
      <input
        className="range"
        type="text"
        value={value}
        onChange={handleInputChange}
      />
      <style jsx>{`
        .MuiSlider-root {
          color: #007bff;
        }

        .range {
          border: 1px solid #707070;
          color: #707070;
          height: 26px;
          padding: 4px 5px;
          width: 55px;
        }
      `}</style>
    </div>
  );
}
