import React, { useState } from 'react';
import Emoji from './Emoji'
import './Card.css';

function Card(props) {

    const [isClicked, setIsClicked] = useState(false);

    function handleClick(){
        setIsClicked(true);
    }

    return (
        <div className={`card-container ${isClicked ? "clicked" : ""}`} onClick={handleClick}>
            <Emoji emoji={props.emoji} />
        </div>
    )
}


export default Card;