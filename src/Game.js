import React, { useState, useEffect } from "react";
import EndGame from "./EndGame";
import GuessRow from "./GuessRow";
import ColorDisplay from "./ColorDisplay";
import Keyboard from "./Keyboard";

function Game({ RNG }) {
  const NUMBER_OF_GUESSES = 6;
  let [guessesRemaining, setGuessesRemaining] = useState(NUMBER_OF_GUESSES);
  let [nextVal, setNextVal] = useState(0);
  let [userGuess, setUserGuess] = useState([]);
  let [guessHex, setGuessHex] = useState("ffffff");
  let answer = RNG.split(""); //["1", "3", "f", "1", "9", "0"];
  let [tempA, setTempA] = useState(answer);
  let ansHex = answer.join("");
  console.log(guessHex);
  // useEffect(() => {
  document.body.style.background = `linear-gradient(to right, #${RNG},#${guessHex})`;
  // }, []);

  //TYPING --> can we move this to the Keyboard component?
  function insertValue(val) {
    if (nextVal === 6) {
      return;
    } else {
      let row =
        document.getElementsByClassName("letter-row")[6 - guessesRemaining]; //---> can we dry "row" by moving it to global scope?
      let box = row.children[nextVal];
      box.textContent = val;
      // userGuess.push(val);
      setUserGuess([...userGuess, val]);
      setNextVal(nextVal + 1);
      console.log(userGuess);
    }
  }
  //DELETE
  function deleteLetter() {
    console.log("delete");
    if (nextVal === 0) {
      return;
    } else {
      let row =
        document.getElementsByClassName("letter-row")[6 - guessesRemaining];
      let box = row.children[nextVal - 1];
      box.textContent = "";
      setUserGuess(userGuess.slice(0, -1));
      console.log(userGuess);
      setNextVal(nextVal - 1);
    }
  }

  // SUBMIT ANSWER
  function checkGuess() {
    console.log(`Answer: ${answer}`);
    console.log(`Users Guess: ${userGuess}`);
    let row =
      document.getElementsByClassName("letter-row")[6 - guessesRemaining];

    // Is guess long enough?
    if (userGuess.length != 6) {
      alert("Not enough letters!");
      return;
    }
    // sets the variable that fills the "current guess" container
    setGuessHex(userGuess.join(""));

    for (let i = 0; i < 6; i++) {
      let letterColor = "";
      let box = row.children[i];

      if (tempA[i] === userGuess[i]) {
        letterColor = "letter-box-correct";
        tempA[i] = "#";
      } else if (tempA.includes(userGuess[i])) {
        letterColor = "letter-box-part-correct";
        tempA[tempA.indexOf(userGuess[i])] = "#";
      } else {
        letterColor = "letter-box-wrong";
      }
      setTempA(answer);

      let delay = 250 * i;
      setTimeout(() => {
        //shade box
        // box.style.backgroundColor = letterColor;
        box.className = letterColor;
        // shadeKeyBoard(letter, letterColor);
      }, delay);
      console.log(`Temp Answer: ${tempA}`);
    }

    if (userGuess === answer) {
      alert("You guessed right! Game over!");
      setGuessesRemaining(0);
      return;
    } else {
      setGuessesRemaining(guessesRemaining - 1);
      setUserGuess([]);
      setNextVal(0);

      if (guessesRemaining === 0) {
        alert("You've run out of guesses! Game over!");
        alert(`The right code was: "${answer}"`);
      }
    }
  }

  let rows = [];
  for (let i = 0; i < NUMBER_OF_GUESSES; i++) {
    rows.push(
      <GuessRow key={i} guessesRemaining={guessesRemaining} rows={rows} />
    );
  }
  return (
    <div>
      {/* <EndGame /> */}
      <ColorDisplay ansHex={ansHex} guessHex={guessHex} />
      {rows}

      <Keyboard
        insertValue={insertValue}
        deleteLetter={deleteLetter}
        checkGuess={checkGuess}
      />
    </div>
  );
}

export default Game;
