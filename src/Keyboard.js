import React from "react";

function Keyboard() {
  // Sets up 3 rows for the keyboard providing only the possible values for hexidecimal

  let firstRowValues = ["0", "1", "2", "3", "4"];
  let secondRowValues = ["5", "6", "7", "8", "9"];
  let thirdRowValues = ["a", "b", "c", "d", "e", "f"];

  let row1 = firstRowValues.map((value) => {
    return <button class="keyboard-button">{value}</button>;
  });
  let row2 = secondRowValues.map((value) => {
    return <button class="keyboard-button">{value}</button>;
  });
  let row3 = thirdRowValues.map((value) => {
    return <button class="keyboard-button">{value}</button>;
  });

  return (
    <div id="keyboard-cont">
      <div>{row1}</div>
      <div class="first-row"></div>
      <div class="second-row">
        <button class="keyboard-button">Del</button>
        <div>{row2}</div>
        <button class="keyboard-button">Enter</button>
      </div>
      <div class="third-row">
        <div>{row3}</div>
      </div>
    </div>
  );
}

export default Keyboard;
