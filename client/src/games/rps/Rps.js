import Footer from "./components/Footer";
import GameBoard from "./components/GameWindow";
import Header from "./components/Header";
// import Instructions from "./components/Instructions";
import Popup from "./components/Popup";
import Reset from "./components/Reset";
import Score from "./containers/ScoreContainer";
import "./Rps.css";

import React from "react";
import { Provider } from "react-redux";
import { store } from "./store";
import { useState } from 'react';



function Rps() {
  const [buttonPopup, setButtonPopup]=useState(false);
  return (
    <Provider store={store}>
      <div className="undo_text_align rps_body">
        <Header />
        <Score />
        <main>
          <button onClick={() => setButtonPopup(true)}>How to Play</button>
        </main>

        <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
          <h3>Instructions:</h3>
          <p>Click on the button to choose either rock, paper or scissors 
            to play against the computer.The outcome of the game is determined by 3 simple rules:
            <br></br>
            Rock (<img className ="icons" src="https://img.icons8.com/ios-glyphs/30/000000/rock.png"/>) wins against scissors (<img className ="icons" src="https://img.icons8.com/ios-glyphs/30/000000/barber-scissors.png"/>).
            <br></br>
            Scissors (<img className ="icons" src="https://img.icons8.com/ios-glyphs/30/000000/barber-scissors.png"/>) win against paper(<img className ="icons" src="https://img.icons8.com/ios-glyphs/30/000000/paper.png"/>).
            <br></br>
            Paper (<img className ="icons" src="https://img.icons8.com/ios-glyphs/30/000000/paper.png"/>) wins against rock (<img className ="icons" src="https://img.icons8.com/ios-glyphs/30/000000/rock.png"/>).</p>
        </Popup>
        <GameBoard />
        <Footer />
      </div>
    </Provider>
  );
}

export default Rps;
