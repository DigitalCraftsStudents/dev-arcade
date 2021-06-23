import { createStore } from "redux";
import { counter } from "./reducers";

const defaultState = {
  count: 0,
};

export const store = createStore(counter, defaultState);
