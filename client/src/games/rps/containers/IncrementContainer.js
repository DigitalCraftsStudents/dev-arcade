import Increment from "../components/Increment";
import { connect } from "react-redux";

import { actionIncrement } from '../actions';

function mapDispatchToProps(dispatch) {
  return {
    // Translate Redux dispatch into a React prop
    handleClick: () => {
      dispatch(actionIncrement());
    },
  };
}

export default connect(null, mapDispatchToProps)(Increment);
