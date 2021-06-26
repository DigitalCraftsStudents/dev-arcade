import Footer from "./components/Footer";
import GameBoard from "./components/GameWindow";
import Header from "./components/Header";
import Instructions from "./components/Instructions";
import Popup from "./components/Popup";
import Reset from "./components/Reset";
import Score from "./containers/ScoreContainer";
import "./Rps.css";

import React from "react";
import { Provider } from "react-redux";
import { store } from "./store";
import { useState } from 'react';


function Rps() {
  const [buttonPopup, setButtonPopup]= useState(false);
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
          <p>Click on the button to choose either rock, paper or scissors to play against the computer.The outcome of the game is determined by 3 simple rules:

          Rock wins against scissors.
          Scissors win against paper.
          Paper wins against rock.</p>
        </Popup>
        <GameBoard />
        <Footer />
      </div>
    </Provider>
  );
}

export default Rps;
