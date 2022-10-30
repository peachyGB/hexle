import React from "react";

function Keyboard({ insertValue, deleteLetter, checkGuess }) {
  let firstRowValues = ["0", "1", "2", "3", "4", "5", "6", "7"];
  let secondRowValues = ["8", "9", "a", "b", "c", "d", "e", "f"];

  // Consolelogs the value of the keyboar button clicked.
  function hValueClick(e) {
    console.log(e.target.textContent);
    insertValue(e.target.textContent);
  }

  // Sets up 3 rows for the keyboard providing only the possible values for hexidecimal
  let row1 = firstRowValues.map((value) => {
    return (
      <button
        key={value}
        className="keyboard-button"
        onClick={(e) => {
          hValueClick(e);
        }}
        style={{
          background: `#${value}${value}${value}${value}${value}${value}`,
          color: "#ffffff",
        }}
      >
        {value}
      </button>
    );
  });
  let row2 = secondRowValues.map((value) => {
    return (
      <button
        key={value}
        className="keyboard-button"
        onClick={(e) => {
          hValueClick(e);
        }}
        style={{
          background: `#${value}${value}${value}${value}${value}${value}`,
          color: "#000000",
        }}
      >
        {value}
      </button>
    );
  });

  return (
    <div id="keyboard-cont">
      {/* <div>{row1}</div> */}
      <div className="first-row">
        <div>
          {row1}
          {row2}
        </div>
      </div>
      <div className="second-row">
        <button
          className="keyboard-button"
          onClick={() => {
            deleteLetter();
          }}
        >
          Delete
        </button>
        <button className="keyboard-button" onClick={checkGuess}>
          Enter
        </button>
      </div>
    </div>
  );
}

export default Keyboard;
