import Increment from "../components/Increment";
import { connect } from "react-redux";

import { actionUpdateUsername } from "../actions";
import UpdateUsername from "../components/UpdateUsername";

function mapDispatchToProps(dispatch) {
  return {
    // propName in React : a fn that calls dispatch
    handleClick: () => {
      dispatch(actionUpdateUsername());
    },
  };
}

export default connect(null, mapDispatchToProps)(UpdateUsername);
