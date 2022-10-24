import React from "react";

function ColorDisplay({ ansHex, guessHex }) {
  return (
    <div className="ColorDisplay">
      <div id="answer" style={{ backgroundColor: `#${ansHex}` }}>
        Answer
      </div>
      <div id="currentGuess" style={{ backgroundColor: `#${guessHex}` }}>
        Current Guess
      </div>
    </div>
  );
}

export default ColorDisplay;
