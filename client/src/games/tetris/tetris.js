import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store';

import GridBoard from './components/GridBoard';
import NextBlock from './components/NextBlock';
import Controls from './components/Controls'
import MessagePopup from './components/MessagePopup'

import './css/tetris.css'

const Tetris = (props) => (

    <div className="App">
      <header className="App-header">
        <h1>Welcome to Tetris</h1>
      </header>
      <GridBoard />
      <NextBlock />
      <Controls />
      <MessagePopup />
    </div>
);

export default Tetris;