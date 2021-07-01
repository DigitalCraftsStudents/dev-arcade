import React from "react";
import Board from "./components/Board";
import ScoreBoard from "./components/ScoreBoard";
import { store } from "./store";
import { Provider } from "react-redux";
import './components/style.css'

function MemoryGame() {

  return (
    <Provider store={store}>
      <div id="memory-game">
        <h1>Hello from Memory Game! part 2</h1>
        <Board />
        <ScoreBoard />
      </div>
    </Provider>
  );
}

export default MemoryGame;
