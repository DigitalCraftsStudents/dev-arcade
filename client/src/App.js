import './App.css';

import {
  Switch,
  Route,
  Link
} from 'react-router-dom';

import {
  Chessboard
} from 'chessboardjsx'

/**
 * Games will be loaded into the Arcade here
 * 
 * 1. Import your Game component from the appropriate `games` directory
 * 2. Create a <Link> to your Game in the Nav
 * 3. Create a corresponding <Route> which includes your Game Component from Step 1
 */

import CounterGame from './games/counter/CounterGame';

import Ping from './components/Ping';

function App() {
  return (
    <div className="App">
      <nav>
        <Link to="/counter">Counter Game</Link>
        <Link to="/ping">Ping</Link>
      </nav>
        <Switch>
          <Route path="/counter">
            <CounterGame />
          </Route>
          <Route path="/ping">
            <Ping />
            <Chessboard />

          </Route>
        </Switch>


    </div>
  );
}

export default App;
