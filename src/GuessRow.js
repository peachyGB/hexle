import React, { useState } from "react";
import GuessSQ from "./GuessSQ";
import Counter from "./Counter";
import GuessColorDisp from "./GuessColorDisp";

function GuessRow({ answer }) {
  let [userGuess, setUserGuess] = useState([]);
  return (
    <div>
      GuessRow
      <GuessSQ
        answer={answer}
        userGuess={userGuess}
        setUserGuess={setUserGuess}
      />
      <Counter />
      <GuessColorDisp />
    </div>
  );
}

export default GuessRow;
