import React, { useState } from "react";
import Card from "./Card";


function Board() {

  const [cardFace, setCardFace] = useState([])

  const possibleCardFaces = ["&#x1F602;", "&#x1F60E;", "&#x1F60D;", "&#x1F61C;", "&#x1F643;", "&#x1F913;", "&#x1F602;", "&#x1F60E;", "&#x1F60D;", "&#x1F61C;", "&#x1F643;", "&#x1F913;"];

  function getRandomIndex(length) {
    return Math.floor(Math.random() * length);
  }
  
  function getRandomFace(randomIndex) {
    var face;
    randomIndex = getRandomIndex(possibleCardFaces.length);
    face = possibleCardFaces[randomIndex];
    possibleCardFaces.splice(randomIndex, 1);
    return face
  }

  const assignFace = () => {
    setCardFace(possibleCardFaces => [
      ...possibleCardFaces, getRandomFace()
    ])
  }
  // setCardFace(prevFaces => {
  //   return [...prevFaces, face]
  // })
  
console.log(cardFace);
  return (
    <div style={{ background: "green" }}>
      <input type="button" onClick={assignFace} value="Start Game"/>
      {cardFace.map((emoji) => {
        return (
          [
            <h1>{emoji}</h1>,
          <Card 
            emoji={emoji}
          />
          ]
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
