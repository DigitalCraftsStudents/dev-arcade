import React from "react";
import UpdateUsername from "./UpdateUsername";

const Output = (props) => (
  <div>
    <h1>Username: {props.username}</h1>
    <UpdateUsername />
    <h3>Score: {props.amount}</h3>
  </div>
);

export default Output;
