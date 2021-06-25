import React from "react";
import Card from "./Card.jsx";
import styled from "styled-components";

function Board() {
  const Grid= styled.div` 
  display: "grid";
  font-family: 'Courier New', Courier, monospace;
  
  `
  return (
    <div style={{ background: "rgb(22,133,248)" }}>
      How Quickly Can You Match
      <Grid>
        <Card></Card> <Card></Card> <Card></Card> <Card></Card>
        <Card></Card> <Card></Card> <Card></Card> <Card></Card>
        <Card></Card> <Card></Card> <Card></Card> <Card></Card>
      </Grid> 
    </div>
  );
}

export default Board;
