import React, { useState } from "react";
import NumberFormat from "react-number-format";
import "./ValueInput.css";

const LANGUAGE = {
  EN: "EN",
  NL: "NL",
};

function ValueInput() {
  const [language, setLanguage] = useState("EN");

  function buttonHandler(e) {
    setLanguage(LANGUAGE.EN === language ? LANGUAGE.NL : LANGUAGE.EN);
  }
  const isEnglish = LANGUAGE.NL === language;

  return (
    <div>
      {" "}
      <h1>A value</h1>
      <div>
        <NumberFormat
          thousandSeparator={isEnglish ? "," : "."}
          decimalSeparator={isEnglish ? "." : ","}
          className="Input"
        />
      </div>
      <div className="ValueInput">
        <button className="Button" onClick={buttonHandler}>
          {language}
        </button>
      </div>
    </div>
  );
}
export default ValueInput;
