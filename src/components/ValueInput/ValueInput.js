import React, { useState } from "react";
import NumberFormat from "react-number-format";
import Title from "./Title";
import "./ValueInput.css";

const LANGUAGE = {
  EN: "EN",
  NL: "NL",
};

function ValueInput() {
  const [language, setLanguage] = useState("EN");
  const [value, setValue] = useState("");

  function buttonHandler() {
    setLanguage(LANGUAGE.EN === language ? LANGUAGE.NL : LANGUAGE.EN);
    // setValue(document.getElementById("number").value);
  }
  function submitHandler() {
    console.log("The value :");
    console.log(value);
    console.log(typeof value);
  }

  function inputHandler(e) {
    setValue(e.target.value);
  }
  const isEnglish = LANGUAGE.NL === language;

  return (
    <div>
      <Title value={value} />
      <div>
        <label>{isEnglish ? LANGUAGE.EN : LANGUAGE.NL} </label>
        <NumberFormat
          id="number"
          className="Input"
          thousandSeparator={isEnglish ? "," : "."}
          decimalSeparator={isEnglish ? "." : ","}
          onChange={inputHandler}
        />
      </div>
      <div className="ValueInput">
        <button className="Button" onClick={buttonHandler}>
          {language}
        </button>
        <button className="Button" onClick={submitHandler}>
          Send
        </button>
      </div>
    </div>
  );
}
export default ValueInput;
