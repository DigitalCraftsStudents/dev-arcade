import React, { useState } from 'react';
import './Card.css';

function Card(props) {

    const [isClicked, setIsClicked] = useState(false);

    function handleClick(){
        setIsClicked(true);
    }

    return (
        <div className={`card-container ${isClicked ? "clicked" : ""}`} onClick={handleClick}>
            <h2>This should be a card </h2>
        </div>
    )
}


export default Card;