import React from "react";

const Output = (props) => (
  <div>
    <h1>Username: {props.username}</h1>
    <h3>Score: {props.amount}</h3>
  </div>
);

export default Output;
