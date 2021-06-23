import React from 'react';
import Board from './components/Board';
<<<<<<< HEAD
import ScoreBoard from './components/ScoreBoard';
// import './App.css';
=======
import App from './components/timer';

>>>>>>> bb163c21acbc5730a02aa5eb5c9eb3d249c4d715

function MinesweeperGame() {
  return (
    <div>
      <div className="heading">
      <h1>Mine......Sweeper</h1>
      </div>
      <div className="timer">
      <App />
      </div>
      <div className="aligned">   
        <Board/>
        <ScoreBoard/>
      </div>
    </div>
  );
}


export default MinesweeperGame;
