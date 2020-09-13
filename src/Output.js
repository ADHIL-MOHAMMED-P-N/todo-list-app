import React from "react";
import "./output.css";
function Output(props) {
  return (
    <div className="output__card">
      <p className="output__cardPara">{props.todo}</p>
    </div>
  );
}

export default Output;
