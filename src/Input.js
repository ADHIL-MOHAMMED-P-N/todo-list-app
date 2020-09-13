import React from "react";
import "./input.css";
function Input(props) {
  return (
    <div className="input">
      <input
        className="input__field"
        type="text"
        onChange={props.read}
        value={props.inputvalue}
      />
    </div>
  );
}
export default Input;
