import React from "react";
import { createStore } from "redux";
import { Provider, useSelector } from "react-redux";
import store from './store'
import "./tetris.css";
import title from './images/tetris.png'

import GridBoard from "./components/GridBoard";
import NextBlock from "./components/NextBlock";
import ScoreBoard from "./components/ScoreBoard";
import Controls from "./components/Controls";
import MessagePopup from "./components/MessagePopup";
import Form from "./components/Form";


function Tetris() {

  
  return (
    
    <Provider store={store}>
      <div className="Tetris">
        <header className="App-header">
          <img
          src={title}
          alt="title"
          className="titleTetris"
        />
        </header>
        
        <Form />
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
