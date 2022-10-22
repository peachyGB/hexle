import React from "react";

function Keyboard({ insertValue, deleteLetter, checkGuess }) {
  let firstRowValues = ["0", "1", "2", "3", "4"];
  let secondRowValues = ["5", "6", "7", "8", "9"];
  let thirdRowValues = ["a", "b", "c", "d", "e", "f"];

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
      >
        {value}
      </button>
    );
  });
  let row3 = thirdRowValues.map((value) => {
    return (
      <button
        key={value}
        className="keyboard-button"
        onClick={(e) => {
          hValueClick(e);
        }}
      >
        {value}
      </button>
    );
  });

  return (
    <div id="keyboard-cont">
      <div>{row1}</div>
      <div className="first-row"></div>
      <div className="second-row">
        <button className="keyboard-button" onClick={deleteLetter}>
          Del
        </button>
        <div>{row2}</div>
        <button className="keyboard-button" onClick={checkGuess}>
          Enter
        </button>
      </div>
      <div className="third-row">
        <div>{row3}</div>
      </div>
    </div>
  );
}

export default Keyboard;
