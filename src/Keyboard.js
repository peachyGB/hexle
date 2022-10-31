import React from "react";

function Keyboard({ insertValue, deleteLetter, checkGuess }) {
  let darkerGroupValues = ["0", "1", "2", "3", "4", "5", "6", "7"];
  let lighterGroupValues = ["8", "9", "a", "b", "c", "d", "e", "f"];

  // Consolelogs the value of the keyboar button clicked.
  function hValueClick(e) {
    console.log(e.target.textContent);
    insertValue(e.target.textContent);
  }

  // Sets up keyboard buttons providing only the possible values for hexidecimal
  let darkGroup = darkerGroupValues.map((value) => {
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
  let lightGroup = lighterGroupValues.map((value) => {
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
      <div className="first-row">
        <div>
          {darkGroup}
          {lightGroup}
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
