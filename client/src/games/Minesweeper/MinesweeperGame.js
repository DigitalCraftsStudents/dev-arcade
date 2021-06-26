import React from 'react';
import Board from './components/Board';
import App from './components/timer';
import SignupForm from './components/SignupForm';
import ScoreBoard from './components/ScoreBoard';
import Instructions from './components/Instructions';
import '../Minesweeper/css/Minesweeper.css';
import background from "../Minesweeper/css/images/pink-city.jpeg";



function MinesweeperGame() {
  return (
    <div className="MinesweeperBody">
      <div style={{backgroundImage: `url(${background})`}}></div>
        
      
      <div className="MinesweeperHeading"> 
      <h1 style={{color: "#FAEB2C",fontFamily: "primary-font", fontSize: "100px"}}>MineSweeper</h1>
     <SignupForm /> 
      <Instructions/>
      </div>
      <div className="timer">
      <App />
      <ScoreBoard/>
      </div>
      <div className="aligned">   
        <Board/>
        
      </div>
    </div>
  );
}


export default MinesweeperGame;
