import React from 'react';
import { Provider } from "react-redux";
import { store } from "./app/store"
import './App.css';

const tetrisGame = (props) => {
    return (
  <Provider store={store}>

  </Provider>
  )
};

export default tetrisGame;