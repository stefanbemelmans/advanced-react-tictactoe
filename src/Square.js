import React from "react";
import App from "./App";

export default class Square extends React.Component{
  constructor(props){
    super(props);
  }

  return (
    <div className="square" onClick={() => props.move(e)}>{props.num}</div>
  )
}
