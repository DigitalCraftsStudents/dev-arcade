import { createStore } from "redux";
import { counter } from "./reducers";
// Default state
const defaultState = {
  count: 0,
};

export const store = createStore(counter, defaultState);
