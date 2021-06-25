import React from "react";
import { Provider } from "react-redux";
import Board from "./components/Board";
import ScoreBoard from "./components/ScoreBoard";

function MemoryGame() {
  return (
    <div>
      <h1>Hello from Memory Game! part 2</h1>
      <Board />
      <ScoreBoard />
    </div>
  );
}

export default MemoryGame;
