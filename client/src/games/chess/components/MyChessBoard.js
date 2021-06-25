// import { Provider } from 'react-redux';
import ChessBoard from 'chessboardjsx';
import React, {useState} from 'react';
// This is App.js from video

const container = {
    marginTop: "2rem",
    display: "flex",
    justifyContent: "space-around",
    alightItem: "center"
}

function MyChessBoard() {
    const [fen, setFen] = useState("start")
    return (
<div className="MyChessBoard" style={container}>
<ChessBoard position={fen}/>
</div>
    );
}

export default MyChessBoard;