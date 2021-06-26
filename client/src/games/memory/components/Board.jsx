import React, { useState } from "react";
import Card from "./Card";
import styled from "styled-components";

function Board() {
  const Grid = styled.div`
display: "grid";
font-family: 'Courier New', Courier, monospace;
`
  const possibleCardFaces = ["😋", "😋", "😎", "😎", "😐", "😐", "😘", "😘", "😍", "😍", "😂", "😂"];
  
  const shuffle = (array = []) => {
    let randIndex;
    for (let currentIndex = array.length - 1; currentIndex > 0; currentIndex--) {
      randIndex = Math.floor(Math.random() * (currentIndex + 1));
      [array[currentIndex], array[randIndex]] = [
        array[randIndex],
        array[currentIndex]
      ];
    }
    return array;
  };

  const [shuffledCards] = useState(shuffle(possibleCardFaces)); // initialize state

  return (
    <div style={{ background: "rgb(22,133,248)" }}>
      <Grid>
        {shuffledCards.map((face, index) => {
          return (
            <Card
              key={`${face}-${index}`}
              id={index}
              face={face}
            />
          )
        })}
      </Grid>
    </div>
  );
}
export default Board;
