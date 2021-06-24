import React from "react";
import { createStore } from "redux";
import { Provider } from "react-redux";
import reducers from "./reducers";

import "./tetris.css";
import title from './images/tetris.png'

import GridBoard from "./components/GridBoard";
import NextBlock from "./components/NextBlock";
import ScoreBoard from "./components/ScoreBoard";
import Controls from "./components/Controls";
import MessagePopup from "./components/MessagePopup";



const store = createStore(reducers);

function Tetris() {
  return (
    <Provider store={store}>
      <div className="Tetris">
        <header className="App-header">
          <img
          src={title}
          alt="title"
          className="title"
        />
        </header>
        <GridBoard />
        <NextBlock />
        <ScoreBoard />
        <Controls />
        <MessagePopup />
        
      </div>
    </Provider>
  );
}

export default Tetris;
