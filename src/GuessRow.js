import React, { useState } from "react";
import Counter from "./Counter";
import GuessColorDisp from "./GuessColorDisp";

function GuessRow({ answer }) {
  let [userGuess, setUserGuess] = useState([]);
  let [g1, setG1] = useState("");
  let [g2, setG2] = useState("");
  let [g3, setG3] = useState("");
  let [g4, setG4] = useState("");
  let [g5, setG5] = useState("");
  let [g6, setG6] = useState("");
  // let tempGuess = [0, 0, 7, 7, f, f];

  function handleSubmit(e) {
    e.preventDefault();
    setUserGuess([g1, g2, g3, g4, g5, g6]);
  }

  return (
    <div>
      <Counter />
      <GuessColorDisp />
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          id="g1"
          value={g1}
          onChange={(e) => setG1(e.target.value)}
        />
        <input
          type="text"
          id="g2"
          value={g2}
          onChange={(e) => setG2(e.target.value)}
        />
        <input type="text" value={g3} onChange={(e) => setG3(e.target.value)} />
        <input type="text" value={g4} onChange={(e) => setG4(e.target.value)} />
        <input type="text" value={g5} onChange={(e) => setG5(e.target.value)} />
        <input type="text" value={g6} onChange={(e) => setG6(e.target.value)} />
        <input type="submit" value="Enter" />
      </form>
    </div>
  );
}

export default GuessRow;
