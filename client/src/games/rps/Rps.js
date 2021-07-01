import Footer from "./components/Footer";
import GameBoard from "./components/GameWindow";
import Header from "./components/Header";
import Popup from "./components/Popup";
import Score from "./containers/ScoreContainer";
import Countdown from "./components/Countdown";
import NameEntry from './components/NameEntry'
import "./Rps.css";

import React from "react";
import { Provider } from "react-redux";
import { store } from "./store";
import { useState } from 'react';
import styled from 'styled-components';
import Player from "./components/Player";

const Wrapper=styled.section`
@import url('https://fonts.googleapis.com/css2?family=DotGothic16&display=swap');
background-color: #222;
color: #fff;
font-family: "DotGothic16", sans-serif;
font-weight: 700;`

const HTPButton=styled.button`
float: left;
font-family: "DotGothic16", sans-serif;
display: inline-block;
vertical-align: middle;
user-select: none;
padding: 0.375rem 0.75rem;
font-size: 1rem;
line-height: 1.5;
background: white;
color: black;
font-size: 20px;
font-weight: 400;
text-align: left;
border: 3px solid black!important;
border-radius: 0;
box-shadow: 3px 3px black, 5px 5px white;
padding-right: 5%;
margin-top: 20px;
`

function Rps() {
  const [buttonPopup, setButtonPopup]=useState(false);
  const [userName, setUserName] = useState('Username')
  const [boardDisplay, setBoardDisplay] = useState('none')
  const [PlayerEntryDisplay, setPlayerEntryDisplay] = useState('block')
  return (
    <Provider store={store}>
      <Wrapper className="undo_text_align rps_body">
       

          <Header />
          <NameEntry handleChange={e => {
              setUserName(e.target.value)
            }} handleClick={() => {
              setBoardDisplay('block')
              setPlayerEntryDisplay('none')
            }} playerEntryDisplay={PlayerEntryDisplay}/>
          <Score  userName={userName} />
          <main>
            <HTPButton onClick={() => setButtonPopup(true)}>How to Play
          
            </HTPButton>
          </main>

          <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
            <h3>Instructions:</h3>
            <p>Click on the button to choose either rock, paper or scissors
            to play against the computer.The outcome of the game is determined by 3 simple rules:
            <br></br>
            Rock (<img className="icons" src="https://img.icons8.com/ios-glyphs/30/000000/rock.png" />) wins against scissors (<img className="icons" src="https://img.icons8.com/ios-glyphs/30/000000/barber-scissors.png" />).
            <br></br>
            Scissors (<img className="icons" src="https://img.icons8.com/ios-glyphs/30/000000/barber-scissors.png" />) win against paper(<img className="icons" src="https://img.icons8.com/ios-glyphs/30/000000/paper.png" />).
            <br></br>
            Paper (<img className="icons" src="https://img.icons8.com/ios-glyphs/30/000000/paper.png" />) wins against rock (<img className="icons" src="https://img.icons8.com/ios-glyphs/30/000000/rock.png" />).</p>
          </Popup>
          <GameBoard display={boardDisplay} />
          <Footer />
        </Wrapper>
      
    </Provider>
  );
}

export default Rps;
