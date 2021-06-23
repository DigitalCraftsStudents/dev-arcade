import React from 'react'

export default function ScoreBoard(props) {
    return (
        <div className="score-board">
            <div>
                <h1>
                        Score:{ props.score } 
                </h1>
            </div>
         
            <button className="score-board-button" onClick={(e) => {
            }}>Play Game</button>
            <button className="score-board-button" onClick={(e) => {
            }}>Restart</button>
        </div>
    )
}