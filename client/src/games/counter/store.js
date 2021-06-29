import { createStore } from 'redux';
import { counter } from './reducers';
// Default state
const defaultState = {
	count: 23893298238923
};
export const store = createStore(counter, defaultState);