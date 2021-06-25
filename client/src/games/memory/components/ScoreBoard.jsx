import React, { useState } from "react";
import { Provider } from "react-redux";
import { store } from "../store";

import Output from "../containers/OutputContainer";
import Increment from "../containers/IncrementContainer";

const ScoreBoard = (props) => (
  <Provider store={store}>
    <div>
      <Output />
      <Increment />
    </div>
  </Provider>
);

export default ScoreBoard;
