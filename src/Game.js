import React from "react";
import EndGame from "./EndGame";
import GuessRow from "./GuessRow";
import AnsColorDisp from "./AnsColorDisp";
import { useState } from "react";
import Keyboard from "./Keyboard";

function Game() {
  const NUMBER_OF_GUESSES = 6;

  let rows = [];
  for (let i = 0; i < NUMBER_OF_GUESSES; i++) {
    rows.push(<GuessRow key={i} />);
  }
  return (
    <div>
      <EndGame />
      <AnsColorDisp />
      {rows}
      <Keyboard />
    </div>
  );
}

export default Game;
