import React from "react";
import "./output.css";
import DeleteIcon from "@material-ui/icons/Delete";

function Output(props) {
  return (
    <div className="output__card">
      <p className="output__cardPara">{props.todo}</p>
      <button className="output__cardDelete" onClick={props.delete}>
        <DeleteIcon />
      </button>
    </div>
  );
}

export default Output;
