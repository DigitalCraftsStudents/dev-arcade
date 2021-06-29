import { createStore } from 'redux';
import { counter } from './reducers';

export const store = createStore(counter, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

