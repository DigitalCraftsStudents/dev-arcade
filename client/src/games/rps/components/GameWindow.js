import React from "react";
import Player from "./Player";
import { connect } from "react-redux";
import { actionIncrement } from '../actions';
import "./GameWindow.css";

const actions = ["rock", "paper", "scissors"];

class GameWindow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      playerOne: actions[1],
      aiPlayer: actions[Math.floor(Math.random() * actions.length)],
    };
  }

  comparePlayers = () => {
    const p1 = this.state.playerOne
    const ai = this.state.aiPlayer
    console.log(p1, ai)
    console.log(this.props);
    if (p1 === 'rock' && ai === 'scissors') {
        this.props.increaseScore()
    } else if (p1 === 'paper' && ai === 'rock') {
        this.props.increaseScore()
    } else if (p1 === 'scissors' && ai === 'paper') {
        this.props.increaseScore()
    }
  };

  determineWinner = () => {
    console.log(this.state.playerOne, this.state.aiPlayer);
    document.getElementById("player_one").style.display = "inline";
    document.getElementById("ai_player").style.display = "inline";
    this.comparePlayers()
  };

  selectAction = (actions) => {
    this.setState({
      playerOne: actions,
    });

    setTimeout(this.determineWinner, 1000);
  };

  render() {
    const { playerOne, aiPlayer } = this.state;
    return (
      <div id="board">
        <div id="top">
          <span>&nbsp;x&nbsp;</span>&nbsp;
        </div>
        <div id="window">
          <Player id="player_one" actions={playerOne} />
          <Player id="ai_player" actions={aiPlayer} />
          <div id="pickObject">
            <button
              className="action-btn-1"
              onClick={() => this.selectAction("rock")}
            >
              ROCK
            </button>
            &nbsp;
            <button
              className="action-btn-2"
              onClick={() => this.selectAction("paper")}
            >
              PAPER
            </button>
            &nbsp;
            <button
              className="action-btn-3"
              onClick={() => this.selectAction("scissors")}
            >
              SCISSORS
            </button>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
    return {
        count: state.count
    }
}

function mapDispatchToProps(dispatch) {
  return {
    // Translate Redux dispatch into a React prop
    increaseScore: () => {
      dispatch(actionIncrement());
    },
  };
}

// export default GameBoard;
export default connect(mapStateToProps, mapDispatchToProps)(GameWindow)
