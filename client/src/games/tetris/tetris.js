import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store';

import GridBoard from './components/GridBoard';
import Controls from './components/Controls'

import './css/tetris.css'

const Tetris = (props) => (

    <div className="App">
      <header className="App-header">
        <h1>Welcome to Tetris</h1>
      </header>
      <GridBoard />
      <Controls />
    </div>
);

export default Tetris;