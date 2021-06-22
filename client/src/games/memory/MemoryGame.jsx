import React from "react";
import { Provider } from "react-redux";
import Board from './components/Board';
import ScoreBoard from "./components/ScoreBoard";

const MemoryGame = (props) => (
  <div>
    <h1>Hello from Memory Game! part 2</h1>
    <ScoreBoard />
    <Board />
  </div>
);

export default MemoryGame;
