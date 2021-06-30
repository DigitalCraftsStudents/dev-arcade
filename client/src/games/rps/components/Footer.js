
import React from 'react';
import styled from 'styled-components';
import myr from '../components/images/myr.png';
import celi from '../components/images/celi.png';
import skyler from '../components/images/skyler.png';
import './Footer.css'

const FooterDiv=styled.div`
text-align: center;
margin: auto;
position: bottom;
left: 0;
bottom: 0;
width: 100%;
border-top: 1px solid #222;
background-color: #222;`




function Footer() {
    return (
        <div id='footer'>
            <a href="https://github.com/sriveragithub" target="_blank">Skyler<img className="skyler" src={skyler}></img> </a>
            <a href="https://github.com/csolis1" target="_blank">Celida<img className="celi" src={celi}></img> </a>
            <a href="https://github.com/myrriame" target="_blank">Myrriame<img className="myr" src={myr}></img> </a>
        </div>

    )

}

export default Footer