import React from 'react'
import Player from "./Player";

const actions=["rock", "paper", "scissors"]

class GameBoard extends React.Component {

    state={
        playerOne: actions[1]
    }

    selectAction=(actions) => {
        this.setState({
            playerOne: actions
        })
    }

    render() {
        const { playerOne }=this.state
        return (
            <div id="board"> <div id="top"><span>&nbsp;x&nbsp;</span>&nbsp;</div>

                <div id="window">
                    <Player actions={playerOne} />


                    <div id="pickObject">
                    <button className="action-btn-1" onClick={() => this.selectAction('rock')}>ROCK</button>&nbsp;
                    <button className="action-btn-2" onClick={() => this.selectAction('paper')}>PAPER</button>&nbsp;
                    <button className="action-btn-3" onClick={() => this.selectAction('scissors')}>SCISSORS</button>
                    </div>
                </div>
            </div>

        )
    }
}
export default GameBoard