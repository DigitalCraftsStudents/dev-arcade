import React, { useState } from 'react';
import './Card.css';

function Card(props) {

    const [isClicked, setIsClicked] = useState(false);

    // const [selectedCards, setSelectedCards] = useState([]) 

    function handleClick(event){
        setIsClicked(true);
        console.log(event.target.class);
    }

    // function checkMatch(){
    //     setSelectedCards
    // }

    return (
        <div className={`memo-card-container ${isClicked ? "memo-clicked" : ""}`} onClick={handleClick}>
            <h1 className={`memo-card-face ${isClicked ? "" : "memo-hidden"}`} name={props.face}>{props.face}</h1>
        </div>
    )
}


export default Card;