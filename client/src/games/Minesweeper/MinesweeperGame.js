import React from 'react';
import Board from './components/Board';
import App from './components/timer';


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
      </div>
    </div>
  );
}


export default MinesweeperGame;
