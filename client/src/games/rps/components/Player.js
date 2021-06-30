import React from "react";
import paper from "./images/paper.png";
import scissors from "./images/scissors.png";
import rock from "./images/rock.png";
import './Player.css'



const Player = (props) => {
  return (
    <span id={props.id}>
      <img
        className="action"
        src={
          props.actions === "rock"
            ? rock
            : props.actions === "paper"
            ? paper
            : scissors
        }
        alt={
          props.actions === "rock"
            ? "rock"
            : props.actions === "paper"
            ? "paper"
            : "scissors"
        }
      ></img>
    </span>
  );
};

export default Player;

