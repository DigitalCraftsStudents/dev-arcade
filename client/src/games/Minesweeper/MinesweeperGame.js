import React from 'react';
import Board from './components/Board';
import ScoreBoard from './components/ScoreBoard';
import SignupForm from './components/SignupForm';
// import './App.css';

function MinesweeperGame() {
  return (
    <div>
      <SignupForm />   <ScoreBoard/>

      <div className="heading">
      <h1>Mine......Sweeper</h1>
      </div>
      <div className="aligned">   
        <Board/>
        
      </div>
    </div>
  );
}

export default MinesweeperGame;
