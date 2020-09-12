import React from "react";
import "./input.css";
function Input() {
  return (
    <div className="input">
      <input className="input__field" type="text" />
      <button className="input__button">Add</button>
    </div>
  );
}
export default Input;
