import React from "react";
import NumberFormat from "react-number-format";
import "./ValueInput.css";

function ValueInput() {
  return (
    <div>
      {" "}
      <h1>A value</h1>
      <NumberFormat className="item" />
      <div>
        <button style></button>
      </div>
    </div>
  );
}
export default ValueInput;
