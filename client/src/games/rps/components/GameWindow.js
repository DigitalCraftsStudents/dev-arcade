import React from 'react';
import styled from 'styled-components';
import Player from "./Player";
import './GameWindow.css'


const actions=["rock", "paper", "scissors"]



const Board=styled.div`
margin: auto;
width: 800px;
height: 500px;
border: 1px solid;
color: rgb(167, 105, 209);`

const Window=styled.div`
margin: auto;
width: 785px;
height: 450px;
border: 1px solid rgb(158, 83, 201);`

const Top=styled.div`
text-align: left;
padding: 1%;`



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

            <Board>
                <div id="board">
                    <Top><div id="top"><span>&nbsp;x&nbsp;</span>&nbsp;</div></Top>
                    <Window>
                        <div id="window">

                            <Player actions={playerOne} />


                            <div id="pickObject">

                                <button className="actionBtn" onClick={() => this.selectAction('rock')}>ROCK</button>&nbsp;

                                        <button className="actionBtn" onClick={() => this.selectAction('paper')}>PAPER</button>&nbsp;

                                        <button className="actionBtn" onClick={() => this.selectAction('scissors')}>SCISSORS</button>

                            </div>

                        </div>
                    </Window>
                </div>
            </Board>

        )
    }
}
export default GameBoard