import { INCREMENT, DECREMENT, UPDATE } from "../actions";

// Reducer
export function counter(state, action) {
  switch (action.type) {
    case INCREMENT:
      return {
        count: state.count + 1,
        username: state.username,
      };
    case DECREMENT:
      return {
        count: state.count - 1,
      };
    case UPDATE:
      return {
        username: "Tested",
      };
    default:
      return state;
  }
}
