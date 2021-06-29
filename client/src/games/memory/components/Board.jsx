import React, { useEffect, useState, useRef } from "react";
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

  const [shuffledCards, setShuffledCards] = useState(shuffle(possibleCardFaces)); // initialize state
  const [selectedCards, setSelectedCards] = useState([]) //track flipped cards
  const [clearedCards, setClearedCards] = useState({}); // track matched cards
  const [moves, setMoves] = useState(0) // track player moves
  const timeout = useRef(null);

  //check if cards match
  const evaluate = () => {
    const [first, second] = selectedCards;
    if (shuffledCards[first] === shuffledCards[second]) {
      setClearedCards((prev) => ({ ...prev, [shuffledCards[first]]: true }));
      setSelectedCards([]);
      return;
    }
    timeout.current = setTimeout(() => {
      setSelectedCards([]);
    }, 600);
  }
  console.log(clearedCards);

  function handleClick(index) {
    // have max of 2 selected cards
    if (selectedCards.length === 1) {
      setSelectedCards((prev) => [...prev, index]);
      //increase moves by one after flipping 2
      setMoves((moves) => moves + 1);
    } else {
      clearTimeout(timeout.current);
      setSelectedCards([index])
    }
  }

  useEffect(() => {
    if (selectedCards.length === 2) {
      setTimeout(evaluate, 600)
    }
    console.log(clearedCards);
  }, [selectedCards])

  const checkIsFlipped = (index) => {
    return selectedCards.includes(index)
  }

  const checkIsCleared = (face) => {
    return Boolean(clearedCards[face]);
  };

  const checkCompletion = () => {
    // We are storing clearedCards as an object since its more efficient to search in an object instead of an array
    if (Object.keys(clearedCards).length === possibleCardFaces.length / 2) {
      console.log("you win!");
    }
  }

  useEffect(() => {
    checkCompletion();
  }, [clearedCards])

  return (
    <div style={{ background: "rgb(22,133,248)" }}>
      <Grid>
        {shuffledCards.map((face, index) => {
          return (
            <Card
              key={`${face}-${index}`}
              id={index}
              face={face}
              index={index}
              onClick={handleClick}
              isClicked={checkIsFlipped(index)}
              isCleared={checkIsCleared(face)}
            />
          )
        })}
      </Grid>
    </div>
  );
}
export default Board;
