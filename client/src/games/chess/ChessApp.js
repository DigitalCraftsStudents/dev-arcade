import React from 'react';
import { ReactDOM } from 'react-dom';
import {MyChessBoard} from 'MyChessBoard';
// This is index.js from video

ReactDOM.render(
    <React.StrictMode>
        <div>
        <MyChessBoard />
        </div>
    </React.StrictMode>,
    document.getElementById('root')
);

export default MyChessBoard