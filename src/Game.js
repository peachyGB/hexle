import React, { useState } from "react";
import EndGame from "./EndGame";
import GuessRow from "./GuessRow";
import AnsColorDisp from "./AnsColorDisp";
import Keyboard from "./Keyboard";

function Game() {
  const NUMBER_OF_GUESSES = 6;
  let guessesRemaining = NUMBER_OF_GUESSES;
  let nextVal = 0;
  let userGuess = [];
  let [pizza, setPizza] = useState();
  let answer = ["1", "3", "f", "1", "9", "0"];

  //TYPING
  function insertValue(val) {
    if (nextVal === 6) {
      return;
    } else {
      let row =
        document.getElementsByClassName("letter-row")[6 - guessesRemaining];
      let box = row.children[nextVal];
      box.textContent = val;
      userGuess.push(val);
      nextVal++;
      console.log(`User Guess: ${userGuess}`);
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
      userGuess.pop();
      nextVal--;
      console.log(`User Guess: ${userGuess}`);
    }
  }

  // SUBMIT ANSWER
  function checkGuess() {
    console.log(answer);
    console.log(userGuess);
    let row =
      document.getElementsByClassName("letter-row")[6 - guessesRemaining];

    // Is guess long enough?
    if (userGuess.length != 6) {
      alert("Not enough letters!");
    }

    for (let i = 0; i < 6; i++) {
      let letterColor = "";
      let box = row.children[i];
      let letter = userGuess[i];
      let letterPosition = answer.indexOf(userGuess[i]);
      console.log(letterPosition);
      // ######Bug Fix needed.
      /* if a value is used more than once on guess but only appears once in the answer, 
      all duplicates are showing yellow when they should be grey. 
      */
      if (letterPosition === -1) {
        letterColor = "grey";
      } else {
        if (userGuess[i] === answer[i]) {
          // shade green
          letterColor = "green";
        } else {
          // shade box yellow
          letterColor = "yellow";
        }

        // answer[letterPosition] = "#";
      }
      let delay = 250 * i;
      setTimeout(() => {
        //shade box
        box.style.backgroundColor = letterColor;
        // shadeKeyBoard(letter, letterColor);
      }, delay);
    }
    if (userGuess === answer) {
      alert("You guessed right! Game over!");
      guessesRemaining = 0;
      return;
    } else {
      guessesRemaining -= 1;
      userGuess = [];
      nextVal = 0;

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
      <EndGame />
      <AnsColorDisp />
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
