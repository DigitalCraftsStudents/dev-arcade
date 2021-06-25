export const INCREMENT = "increment";
export const DECREMENT = "decrement";
export const UPDATE = "update";

export function actionIncrement() {
  return {
    type: INCREMENT,
  };
}

export function actionDecrement() {
  return {
    type: DECREMENT,
  };
}

export function actionUpdateUsername() {
  return {
    type: UPDATE,
  };
}
