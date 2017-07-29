import React from "react";
import App from "./App";

export default function Square(props){
  return (
    <div className="square" num={onClick={props.onClick}>{props.player}</div>
  )
}
