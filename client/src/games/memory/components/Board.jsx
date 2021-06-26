import React, { useState } from "react";
import Card from "./Card";


function Board() {

  const possibleCardFaces = ["&#x1F602;", "&#x1F60E;", "&#x1F60D;", "&#x1F61C;", "&#x1F643;", "&#x1F913;", "&#x1F602;", "&#x1F60E;", "&#x1F60D;", "&#x1F61C;", "&#x1F643;", "&#x1F913;"];


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
    <div style={{ background: "green" }}>

    {shuffledCards.map((face, index) => {
      return (
        <Card 
        key={`${face}-${index}`}
        id={index}
        face={face}
        />
      )
    })}

      {/* <div className="mdc-layout-grid">
        <div className="mdc-layout-grid__inner">
          <div className="mdc-layout-grid__cell">
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
          </div>
          <div className="mdc-layout-grid__cell">
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
          </div>
          <div className="mdc-layout-grid__cell">
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
          </div>
        </div>
      </div> */}
    </div>
  );
}

export default Board;
