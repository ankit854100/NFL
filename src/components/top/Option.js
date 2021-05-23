import React, { useState } from "react";

export default function (props) {
  const [check, setCheck] = useState(false);

  function handleChange() {
    setCheck(!check);
    props.fun(props.name);
  }

  return (
    <React.Fragment>
      <div className="radio-inputContainer">
        <input
          type="radio"
          name={props.name}
          checked={check}
          onClick={handleChange}
        />
        <img className="image" src={props.url} alt="" />
        <span>{props.text}</span>
      </div>
    </React.Fragment>
  );
}
