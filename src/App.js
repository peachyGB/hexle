import "./App.css";
import UH from "./UH";
import Game from "./Game";
import Playground from "./Playground";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hexle</h1>
      </header>
      <UH />
      <Game id="game-board" />
      <Playground />
    </div>
  );
}

export default App;
