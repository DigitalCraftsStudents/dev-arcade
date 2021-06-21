import React from "react";

//309-end

render() {
    const {store, grid, won, lost, mineCount, startTime, endTime, onReset} = this.props;
    const flagCount = flatten(grid).filter((c) => c.flagged).length;
    const now = Date.now();
    
    return (
      <PopBox className="minesweeper">
        <PopBox className="minesweeper__info" inset>
          <DigitalCounter number={mineCount - flagCount}/>
          <button className="minesweeper__win-label" onClick={onReset}>
            {won ? 
              "You won!" : 
              lost ? 
                "You Lost" : 
                "Reset"
            }
          </button>
          <DigitalCounter number={
              startTime ? 
                Math.floor(((won || lost ? endTime : now) - startTime) / 1000) : 
                0
          }/>
        </PopBox>
          
        <Minefield>
          {grid.map((row, i) =>
            <MinefieldRow key={`row-${i}`}>
              {row.map((cell) =>
                <MineCell {...cell} 
                  key={cell.id}
                  revealed={cell.revealed || ((won || lost) && !cell.flagged && cell.mine)}
                  onMouseDown={this.onCellMouseDown.bind(this, cell)}
                  onClick={this.onCellMouseUp.bind(this, cell)}
                  onContextMenu={(e) => (e.preventDefault(), false)}
                >
                  <CellContent {...cell} borderMineCount={helpers.countMinesAround(this.props, cell.id)}/>
                </MineCell>
              )}
            </MinefieldRow>
          )}
        </Minefield>
      </PopBox>
    );
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.store = store;
    this.state = {
      width: initialWidth,
      height: initialHeight,
      mineCount: initialMines,
      storeState: store.getState(),
    };
  }

  componentDidMount() {
    this.subscribe();
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  subscribe() {
    this.unsub = this.store.subscribe(() => this.setState({
      storeState: this.store.getState()
    }));
  }

  unsubscribe() {
    if(this.unsub) {
      this.unsub();
      this.unsub = null;
    }
  }

  updateStateInt(key, event) {
    this.setState({[key]: parseInt(event.target.value)});
  }

  reset() {
    const {width, height, mineCount} = this.state;
    this.unsubscribe();
    this.store = getMinesweeperStore({width, height, mineCount});
    this.subscribe();
    this.setState({storeState: this.store.getState()});
  }
  
  render() {
    const {storeState, width, height, mineCount} = this.state;
    return (
      <div>
        <div className="game-container">
          <Minesweeper {...storeState} store={this.store} onReset={this.reset.bind(this)}/>
        </div>
        <div className="game-controls">
          <div>
            <label>Width</label>
            <input type="number" value={width} onChange={this.updateStateInt.bind(this, "width")} min="0" max="50"/>
          </div>
          <div>
            <label>Height</label>
            <input type="number" value={height} onChange={this.updateStateInt.bind(this, "height")} min="0" max="50"/>
          </div>
          <div>
            <label>Mines</label>
            <input type="number" value={mineCount} onChange={this.updateStateInt.bind(this, "mineCount")} min="0" max="2499"/>
          </div>
          <button onClick={this.reset.bind(this)}>Start</button>
        </div>
      </div>
    );
  }
}

function padNumber(n, length) {
  const isNegative = n < 0;
  if(isNegative) {
    n = n * -1
    length -= 1; // tack on "-" after padding
  };
  n = n.toString();
  while(n.length < length) {
    n = "0" + n;
  }
  if(isNegative) {
    n = "-" + n;
  }
  return n;
}

function classNames(...names) {
  return names.filter((n) => !!n).join(" ");
}

ReactDOM.render(<App/>, document.querySelector(".outlet"));
