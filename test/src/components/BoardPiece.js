import React from "react";

const BoardPiece = (props) => (
  <img 
  className="col-sm-4 picture"
  data-breed={props.breed}
  src={props.image} 
  alt={props.breed}
  key={props.breed}
  onClick={props.onClick} 
  />
);

export default BoardPiece;
