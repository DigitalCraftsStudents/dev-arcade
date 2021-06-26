import GameWindow from "../components/GameWindow";
import { connect } from "react-redux";

import { actionIncrement } from '../actions';

function mapDispatchToProps(dispatch) {
  return {
    // Translate Redux dispatch into a React prop
    increaseScore: () => {
      dispatch(actionIncrement());
    },
  };
}

export default connect(null, mapDispatchToProps)(GameWindow);
