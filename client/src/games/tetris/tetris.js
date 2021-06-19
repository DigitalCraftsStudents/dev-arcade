import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store';

const tetris = (props) => (
  <Provider store={store}>
    <div>
      <h1>Welcome to Tetris</h1>
    </div>
  </Provider>
);

export default tetris;