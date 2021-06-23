import React from 'react';
import Board from './components/Board';
<<<<<<< HEAD
import ScoreBoard from './components/ScoreBoard';
import SignupForm from './components/SignupForm';
// import './App.css';
=======
import App from './components/timer';

>>>>>>> bb163c21acbc5730a02aa5eb5c9eb3d249c4d715

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
