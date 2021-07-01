import './Header.css'
import '../Rps.css'
import styled from 'styled-components';
import H1 from '../components/images/rockpaperart.png'

const Wrapper=styled.section`
background-color: #222;
color: #fff;
font-family: "DotGothic16", sans-serif;
font-weight: 700;`

const Container=styled.div`
margin: auto;
width: 50%;`



function Header() {
  return (
    <Wrapper>
      <Container>
        <div id="container">
          <br></br><br></br>
          <img src={H1} id="h1title"></img>

        </div>
      </Container>
    </Wrapper>

  )

}

export default Header