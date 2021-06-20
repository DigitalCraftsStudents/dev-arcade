import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store';

import GridBoard from './components/GridBoard';
import NextBlock from './components/NextBlock';
import ScoreBoard from './components/ScoreBoard';
import Controls from './components/Controls'

import './css/tetris.css'

const Tetris = (props) => (

    <div className="tetris">
      <header className="tetris-header">
        <h1>Welcome to Tetris</h1>
      </header>
      <GridBoard />
      <NextBlock />
      <ScoreBoard />
      <Controls />
    </div>
);

export default Tetris;