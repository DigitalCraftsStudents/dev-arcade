import React from 'react';
import Board from './components/Board';
import ScoreBoard from './components/ScoreBoard';
// import './App.css';

function MinesweeperGame() {
  return (
    <div>
      <div className="heading">
      <h1>Mine......Sweeper</h1>
      </div>
      <div className="aligned">   
        <Board/>
        <ScoreBoard/>
      </div>
    </div>
  );
}

export default MinesweeperGame;
