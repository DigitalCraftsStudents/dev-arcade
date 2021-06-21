//207-307

// used to create popout border effect
function PopBox(props) {
    const className = classNames("pop-box", props.inset ? "pop-box--inset" : null, props.className);
    return (<div {...props} className={className}/>)
  }
  
  function Minefield(props) {
    return (<PopBox {...props} className="minefield" inset/>);
  }
  
  function MinefieldRow(props) {
    return (<div {...props} className="minefield-row"/>);  
  }
  
  function MineCell(props) {
    const {revealed, flagged, mine} = props;
    const className = classNames(
      "mine-cell",
      `mine-cell--${revealed ? "revealed" : "hidden"}`,
      mine ? "mine-cell--mine" : null,
      flagged ? "mine-cell--flagged" : null
    );
  
    return (<PopBox {...props} className={className} revealed={true}/>);
  }
  
  function MineCellNumber({number}) {
    const className = `mine-cell-number mine-cell-number--${number}`;
    return (<span className={className}>{number || ""}</span>);
  }
  
  function CellContent({revealed, mine, borderMineCount}) {
    if(!mine && borderMineCount && revealed) {
      return (<MineCellNumber number={borderMineCount}/>);
    }
    return null;
  }
  
  function DigitalCounter(props) {
    const {number} = props;
    const paddedNumber = padNumber(number, 3);
    return (<div {...props} className="digital-counter">{paddedNumber}</div>);
  }
  
  class Minesweeper extends React.Component {
    componentWillUnmount() {
      this.stopTimer();
    }
  
    componentWillReceiveProps(nextProps) {
      const {minesPlaced, won, lost} = this.props;
  
      if(!minesPlaced && nextProps.minesPlaced) {
        this.startTimer();
      }
      if((!won && nextProps.won) || (!lost && nextProps.lost)) {
        clearInterval(this.timer);
        this.stopTimer();
      }
    }
  
    startTimer() {
      this.timer = setInterval(() => this.forceUpdate(), 500);
    }
  
    stopTimer() {
      clearInterval(this.timer);
    }
  
    onCellMouseUp(cell, event) {
      event.preventDefault();
      const {store} = this.props;
      const {which} = event.nativeEvent;
      switch(event.nativeEvent.which) {
        case 1:
          store.dispatch({
            type: "REVEAL_CELL",
            cellId: cell.id
          });
          break;
        case 2:
          store.dispatch({
            type: "REVEAL_AROUND_CELL",
            cellId: cell.id
          });
          break;
      }
      return false;
    }
  
    onCellMouseDown(cell, event) {
      event.preventDefault();
      if(event.nativeEvent.which === 3) {
        const {store} = this.props;
        store.dispatch({
          type: "FLAG_CELL",
          cellId: cell.id
        });
      }
      return false;
    }