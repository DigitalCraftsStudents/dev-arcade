import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { createMuiTheme } from '@material-ui/core';




// const theme = createMuiTheme({
//   palette: {
//     primary: {
//       main: "#1685F8",
//     },
//     secondary: {
//       main: "#E900FF",
//     },
//     accent1: {
//       main: "#FAEB2C",
//     },
//     accent2: {
//       main: "#F52789",
//     },
//     accent3: {
//       main: "#3D144C",
//     },
//     background: {
//       default: "#1685F8",
//     },
//   },
// });

// const useStyles = makeStyles((theme) => ({
//   root: {
//     width: '50%',
//   },
//   heading: {
//     fontSize: theme.typography.pxToRem(20),
//     fontWeight: theme.typography.fontWeightBold,
//   },
//   content: {
//       fontSize: theme.typography.pxToRem(18),
      
//   }
// }));

export default function SimpleAccordion() {
  // const classes = useStyles();

  return (
    <div >
      <Accordion style= {{width: "30%", textAlign: "center", margin: "auto", color: "#3D144C", fontFamily: "primary-font" }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          style= {{backgroundColor: "#1685F8", fontFamily: "primary-font" }}
          
        >
          <Typography >How to Play the Game</Typography>
        </AccordionSummary>
        <AccordionDetails style={{backgroundColor: "#FAEB2C"}}>
          <Typography >
            Click on any square to begin.
            The timer will begin with the first selection. The numbers on the squares indicates the number of mines surrounding that square. Using that information, you will then try to identify where the mines are hidden.
            If you are able to navigate the board without setting off any mines - YOU WIN!
          </Typography>
        </AccordionDetails>
      </Accordion>
      
    </div>
  );
}