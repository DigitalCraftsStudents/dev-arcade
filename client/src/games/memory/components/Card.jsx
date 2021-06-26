import React, { useState } from 'react';
import './Card.css';

function Card(props) {

    const [isClicked, setIsClicked] = useState(false);

    function handleClick(){
        setIsClicked(true);
    }

    return (
        <div className={`memo-card-container ${isClicked ? "clicked" : ""}`} onClick={handleClick}>
        <h1>{props.face}</h1>
        </div>
    )
}


export default Card;