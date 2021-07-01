import './App.css';

import {
  Switch,
  Route,
  Link
} from 'react-router-dom';
import Home from './components/Home/Home'
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
      {/* <nav>
        <Link to="/counter">Counter Game</Link>
        <Link to="/ping">Ping</Link>
      </nav> */}
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/counter">
          <CounterGame />
        </Route>
        <Route path="/ping">
          <Ping />
        </Route>
        <Route path="/chess">
          <Home />
        </Route>
        <Route path="/memory">
          <Home />
        </Route>
        <Route path="/minesweeper">
          <Home />
        </Route>
        <Route path="/rps">
          <Home />
        </Route>
        <Route path="/tetris">
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
