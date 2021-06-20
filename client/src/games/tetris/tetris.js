import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducers from './reducers'

import GridBoard from './components/GridBoard';
import NextBlock from './components/NextBlock';
import ScoreBoard from './components/ScoreBoard';
import Controls from './components/Controls'
import MessagePopup from './components/MessagePopup'

import './css/tetris.css'

const store = createStore(reducers)

const Tetris = (props) => ( 
  <Provider store={store}>
    <div className="tetris">
      <header className="tetris-header">
        <h1>Welcome to Tetris</h1>
      </header>
      <GridBoard />
      <NextBlock />
      <ScoreBoard />
      <Controls />
      <MessagePopup />
    </div>
    </Provider>

);

export default Tetris;