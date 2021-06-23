import React from 'react';
import Board from './components/Board';
import App from './components/timer';
import SignupForm from './components/SignupForm';
import ScoreBoard from './components/ScoreBoard';


function MinesweeperGame() {
  return (
    <div>
      <SignupForm />   <ScoreBoard/>

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
