import { createStore } from 'redux';
import { counter, addScore } from './reducers';
// Default state
const defaultState = {
	count: 23893298238923,
	credentials: []
};

export const store = createStore(counter, defaultState);
export const reduxStore = createStore(addScore, defaultState);
