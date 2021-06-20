import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store';

import GridSquare from './components/GridSquare.js';

import './css/tetris.css'

const Tetris = (props) => (

    <div className="App">
      <header className="App-header">
        <h1>Welcome to Tetris</h1>
      </header>
      <GridSquare color="1" />
    </div>

);

export default Tetris;