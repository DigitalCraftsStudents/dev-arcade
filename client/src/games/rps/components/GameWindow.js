import React from "react";
import Player from "./Player";
import Reset from './Reset'
import { connect } from "react-redux";
import { actionIncrement } from "../actions";
import "./GameWindow.css";

const actions = ["rock", "paper", "scissors"];

class GameWindow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      playerOne: actions[1],
      aiPlayer: actions[1],
    };
  }

  selectAction = (selection) => {
    document.getElementById('pickObject').style.display = 'none'
    document.getElementById('resetDiv').style.display = 'flex'
    this.setState({
      playerOne: selection,
      aiPlayer: actions[Math.floor(Math.random() * actions.length)],
    });
    setTimeout(this.determineWinner, 1000);
  };

  determineWinner = () => {
    console.log(this.state.playerOne, this.state.aiPlayer);
    document.getElementById("player_one").style.display = "inline";
    document.getElementById("ai_player").style.display = "inline";
    this.comparePlayers();
  };

  comparePlayers = () => {
    const p1 = this.state.playerOne;
    const ai = this.state.aiPlayer;
    if (p1 === "rock" && ai === "scissors") {
      this.props.increaseScore();
    } else if (p1 === "paper" && ai === "rock") {
      this.props.increaseScore();
    } else if (p1 === "scissors" && ai === "paper") {
      this.props.increaseScore();
    }
  };

  resetClick = () => {
    document.getElementById('pickObject').style.display = 'flex'
    document.getElementById("player_one").style.display = "none";
    document.getElementById("ai_player").style.display = "none";
    document.getElementById('resetDiv').style.display = 'none'
  }

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
              className="actionBtn"
              onClick={() => this.selectAction("rock")}
            >
              ROCK
            </button>
            &nbsp;
            <button
              className="actionBtn"
              onClick={() => this.selectAction("paper")}
            >
              PAPER
            </button>
            &nbsp;
            <button
              className="actionBtn"
              onClick={() => this.selectAction("scissors")}
            >
              SCISSORS
            </button>
          </div>
          <Reset onClick={() => {this.resetClick()}}/>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    count: state.count,
  };
};

function mapDispatchToProps(dispatch) {
  return {
    // Translate Redux dispatch into a React prop
    increaseScore: () => {
      dispatch(actionIncrement());
    },
  };
}

// export default GameBoard;
export default connect(mapStateToProps, mapDispatchToProps)(GameWindow);
