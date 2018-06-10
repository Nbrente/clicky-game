import React from "react";

const Scoreboard = props => (
  <div>
    <h2>currentScore: {props.currentScore} </h2>
    <h2>highScore: {props.highScore} </h2>
    <h2>{props.message}</h2>
  </div>
);



export default Scoreboard;
