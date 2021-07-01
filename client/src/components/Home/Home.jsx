import { makeStyles } from "@material-ui/core/styles";
import { Grid, Paper, Typography } from "@material-ui/core";
import styled from "styled-components";
import Konami from "react-konami-code";
import "./Home.css";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    color: "#FAEB2C",
    flexGrow: 1,
  },
  paper: {
    backgroundColor: "#3D144Ca1",
    border: "2px solid #F52789",
    color: "#FAEB2C",
    paddingBottom: "10px",
    paddingTop: "20px",
    textAlign: "center",
  },
  text: {
    paddingTop: "5px",
  },
}));

const KonamiImg = styled.div`
  position: fixed;
  z-index: 5;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #132143a8;

  img {
    width: 600px;
  }
`;

const Home = (props) => {
  const classes = useStyles();

  const playSound = () => {
    const audio = new Audio("Excellent-laugh.wav");
    audio.play();
  };

  return (
    <>
      {/* <LazyHero
        color="#ffffff"
        imageSrc="/80s-grid.jpg"
        opacity="0.7"
        parallaxOffset="100"
      >
        
      </LazyHero> */}
      <img className="logo" src="DAlogoRevised.png" alt="logo" />

      <div className={classes.root}>
        <h1>GAMES</h1>
        <Grid className="darkblue" container spacing={1}>
          <Grid container item xs={12} spacing={3}>
            <Grid item xs={2}></Grid>

            <Grid item xs={4}>
              <Link to="/chess">
                <Paper className={classes.paper}>
                  <h3>Chess</h3>
                </Paper>
              </Link>
            </Grid>

            <Grid item xs={4}>
              <Link to="/memory">
                <Paper className={classes.paper}>
                  <h3>Memory</h3>
                </Paper>
              </Link>
            </Grid>

            <Grid item xs={2}></Grid>
          </Grid>

          <Grid container item xs={12} spacing={3}>
            <Grid item xs={2}></Grid>
            <Grid item xs={4}>
              <Link to="/minesweeper">
                <Paper className={classes.paper}>
                  <img
                    className="gameLogo"
                    src="minesweeper2.png"
                    alt="minesweeper"
                  />
                  <p className={classes.text}>lorum ipsum</p>
                </Paper>
              </Link>
            </Grid>
            <Grid item xs={4}>
              <Link to="/rps">
                <Paper className={classes.paper}>
                  <h3>Rock, Paper, Sissors</h3>
                  <img src="iconimages/pageimage.png" alt="paperImage" />
                  <p className={classes.text}>Update Profile</p>
                </Paper>
              </Link>
            </Grid>
            <Grid item xs={2}></Grid>
          </Grid>

          <Grid container item xs={12} spacing={3}>
            <Grid item xs={2}></Grid>
            <Grid item xs={8}>
              <Link to="tetris">
                <Paper className={classes.paper}>
                  <h3>Tetris</h3>
                  <img src="iconimages/emergencycardslist.png" alt="cardList" />
                  <p className={classes.text}>
                    Print Emergency Contact Cards for all Members
                  </p>
                </Paper>
              </Link>
            </Grid>

            <Grid item xs={2}></Grid>
          </Grid>
        </Grid>

        <Konami action={playSound} timeout={5000}>
          <KonamiImg>
            <Typography variant="h2">
              Yelrac Zil defeats Snake Jodgel!!
            </Typography>
            <img
              src="https://github.com/chrisowensdev/terminal-kombat/raw/master/images/intro_screen.png"
              alt="terminal-kombat"
            />
          </KonamiImg>
        </Konami>
      </div>
    </>
  );
};

export default Home;
