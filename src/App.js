import "./App.css";
import UH from "./UH";
import Game from "./Game";
import Playground from "./Playground";

function App() {
  let RNG = Math.floor(Math.random() * 16777215).toString(16);
  console.log(RNG);
  return (
    <div className="App">
      <header className="App-header">
        <h1>HONEY CODE</h1>
      </header>
      <UH />
      <Game id="game-board" RNG={RNG} />
      <Playground />
    </div>
  );
}

export default App;
