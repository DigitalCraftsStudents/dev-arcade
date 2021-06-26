import React from "react";
import paper from "./images/paper.png";
import scissors from "./images/scissors.png";
import rock from "./images/rock.png";
import './Player.css'


const Player=({ actions }) => {
    return (

        <span>
            <img className="action" src={
                actions==="rock"? rock:actions==="paper"? paper:scissors
            } alt={
                actions==="rock"? "rock":actions==="paper"? "paper":"scissors"
            } id="rps_action"></img>

        </span>

    )
}

export default Player