import React, { useState } from "react";
import Box from "./Box";

function GuessRow({ guessesRemaining, rows }) {
  //Creates 6 boxes within each row that for each hex value
  let boxes = [];

  for (let j = 0; j < 6; j++) {
    boxes.push(<Box key={j} id={j} guessesRemaining={guessesRemaining} />);
  }

  // console.log(rows);
  return <div className="letter-row"> # {boxes}</div>;
}

export default GuessRow;
