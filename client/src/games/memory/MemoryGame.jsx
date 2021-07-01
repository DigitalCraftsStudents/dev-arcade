import React from "react";
import Board from "./components/Board";
import ScoreBoard from "./components/ScoreBoard";
import { store } from "./store";
import { Provider } from "react-redux";

function MemoryGame() {
  return (
    <Provider store={store}>
      <div>
        <h1>Hello from Memory Game! part 2</h1>
        <Board />
        <ScoreBoard />
      </div>
    </Provider>
  );
}

export default MemoryGame;
