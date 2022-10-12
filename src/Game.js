import React from "react";
import EndGame from "./EndGame";
import GuessRow from "./GuessRow";
import AnsColorDisp from "./AnsColorDisp";
import { useState } from "react";

function Game() {
  let [answer, setAnser] = useState([]);
  return (
    <div>
      <EndGame />
      <AnsColorDisp answer={answer} />
      <GuessRow answer={answer} />
    </div>
  );
}

export default Game;
