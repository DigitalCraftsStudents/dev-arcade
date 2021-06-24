import React from 'react'

export default function ScoreBoard(props) {
    return (
        <div className="score-board">
            <div>
                <h1 style={{color: "#E900FF"}}>
                        Score:{ props.score } 
                </h1>
            </div>
         
            <button style={{backgroundColor: "#E900FF", color: "#FAEB2C", alignItems:"center"}} className="score-board-button" onClick={(e) => {
            }}>Play Game</button>
            <button style={{backgroundColor: "#E900FF", color: "#FAEB2C"}} className="score-board-button" onClick={(e) => {
            }}>Restart</button>
        </div>
    )
}