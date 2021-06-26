import { ADD_SCORE } from "../reducers/actionTypes";

// return

const scoreActions = ({score}) => {
    return {
    type: ADD_SCORE,
    payload: {score},
    }
};

export default scoreActions;