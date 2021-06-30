import React from 'react';
import styled from 'styled-components';


export default function ScoreBoard(props) {
    const Button = styled.button`
    background-color: #E900FF;
    color: #FAEB2C;
    align-items: center;
    `;
    return (
        <div className="score-board">
            <div>
                <h1 style={{color: "#FAEB2C", fontFamily: "primary-font", fontSize: "40px"}}>
                        Score:{ props.score } 
                </h1>
            </div>
        </div>
    )
}