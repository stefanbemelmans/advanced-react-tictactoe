import React from "react";
import Square from "Square";

export default function Board(props){
  
  return(
    <div id="board">
      <div className="row">
        {props.renderSquare(0)}
        {props.renderSquare(1)}
        {props.renderSquare(2)}
      </div>
      <div className="row">
        {props.renderSquare(3)}
        {props.renderSquare(4)}
        {props.renderSquare(5)}
      </div>
      <div className="row">
        {props.renderSquare(6)}
        {props.renderSquare(7)}
        {props.renderSquare(8)}
      </div>
    </div>
  );

}


}
