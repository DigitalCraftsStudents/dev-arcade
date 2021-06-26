import { createStore } from 'redux';
import { counter } from './reducers';
// Default state
const defaultState = {
	count1: 0,
	count2: 0
};

export const store = createStore(counter, defaultState);
