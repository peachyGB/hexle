import React, { useState } from "react";

function Playground() {
  let [ans, setAns] = useState(["f", "f", "0", "1", "2", "3"]);
  let [guess, setGuess] = useState(["f", "f", "f", "f", "2", "3"]);
  let tempA = ["f", "f", "0", "1", "2", "3"];

  function runCode() {
    if (ans === guess) {
      console.log("WIN!");
    } else {
      console.log("Some or None Match");
    }

    for (let x = 0; x < 6; x++) {
      console.log(tempA);
      if (tempA[x] === guess[x]) {
        console.log(`Green ${guess[x]}`);
        tempA[x] = "#";
      } else if (tempA.includes(guess[x])) {
        console.log(`Yellow ${guess[x]}`);
        tempA[tempA.indexOf(guess[x])] = "#";
      } else {
        console.log(`Grey ${guess[x]}`);
      }
    }
    // set temp guess as new variable, then make previous guess that displays = that value
  }

  return (
    <div style={{ fontSize: "2.5rem" }}>
      <div className="letter-row2">
        <div className="letter-box"></div>
        <div className="letter-box-correct"></div>
        <div className="letter-box-part-correct"></div>
      </div>
      <h3>Playground</h3>

      <div>{ans}</div>
      <div>{guess}</div>
      <button onClick={runCode}>RUN</button>
      <div id="hexagon"></div>
      <div>&#x2B22;</div>

      <ol>
        <li> Delete button messes up the length of userGuess</li>
        <li> how hexcodes work page (modals and example images)</li>
        <li> box shapes: circle for close, hexagon for correct</li>
        <li>
          color scheme: minimal, several greys, maybe a theme color for accents,
          background gradient
        </li>
        <li>
          Site Name: "Hexle" "Honey Codes" custom logo or a font only used for
          site name
        </li>
        <li>Tab name and icon</li>
        <li>end game modal</li>
        <li>place buttons in single row</li>
      </ol>
    </div>
  );
}

export default Playground;
