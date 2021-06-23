import Footer from "./components/Footer";
import GameBoard from "./components/GameWindow";
import Header from "./components/Header";
import Instructions from "./components/Instructions";
import Reset from "./components/Reset";
import Score from "./containers/ScoreContainer";
import Increment from './containers/IncrementContainer'
import "./Rps.css";

import React from "react";
import { Provider } from "react-redux";
import { store } from "./store";

function Rps() {
  return (
    <Provider store={store}>
      <div className="undo_text_align rps_body">
        <Header />
        <Score />
        <Increment />
        <Instructions />
        <GameBoard />
        <Reset />
        <Footer />
      </div>
    </Provider>
  );
}

export default Rps;
