import "./App.css";
import UH from "./UH";
import Game from "./Game";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hexle</h1>
      </header>
      <UH />
      <Game id="game-board" />
    </div>
  );
}

export default App;

// import { WORDS } from "./words.js";

// const NUMBER_OF_GUESSES = 6;
// let guessesRemaining = NUMBER_OF_GUESSES;
// let currentGuess = [];
// let nextLetter = 0;
// let rightGuessString = WORDS[Math.floor(Math.random() * WORDS.length)];
// console.log(rightGuessString);
