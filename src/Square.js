import React from "react";
import App from "./App";

export default function Square(props){
  return (
    <div className="square" onClick={props.onClick}>{props.num}</div>
  )
}
