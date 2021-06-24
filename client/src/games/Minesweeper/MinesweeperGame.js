import React from 'react';
import Board from './components/Board';
import App from './components/timer';
import SignupForm from './components/SignupForm';
import ScoreBoard from './components/ScoreBoard';
import '../Minesweeper/css/Minesweeper.css';

function MinesweeperGame() {
  return (
    <div className="MinesweeperBody">
      <SignupForm />   <ScoreBoard/>

      <div className="heading">
      <h1 style={{color: "#E900FF"}}>MineSweeper</h1>
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
