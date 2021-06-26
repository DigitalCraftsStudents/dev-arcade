import { ADD_PLAYER, ADD_SCORE } from "./actionTypes";

const initialState = {
    name: '',
    score: 0
}

const playerReducer = (state=initialState, action) => {
    switch (action.type){
        case ADD_PLAYER: {
            const { name } = action.payload
            return { name };
        }
        case ADD_SCORE: {
            const { score } = action.payload
            return { score };
        }
        default: 
            return state;
    }
}

export default playerReducer;