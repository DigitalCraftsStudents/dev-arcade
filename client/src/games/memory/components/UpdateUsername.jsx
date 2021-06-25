import React from "react";

const UpdateUsername = (props) => (
  <div>
    <input type="text" placeholder="Please give a Username" />
    <button onClick={props.handleClick}>Enter</button>
  </div>
);

export default UpdateUsername;
