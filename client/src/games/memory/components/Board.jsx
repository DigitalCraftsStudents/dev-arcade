import React from "react";
import Card from "./Card.jsx";


function Board() {
  return (
    <div style={{ background: "rgb(22,133,248)" }}>
      How Quickly Can You Match
      <div className="mdc-layout-grid">
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
      </div>
    </div>
  );
}

export default Board;
