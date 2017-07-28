import React, { Component } from "react";
import Square from "./Square";

class App extends Component {
  constructor() {
    super();
    this.state = {
      playerTurn: 'X'

    }
  }
  renderSquare(i){
    return <Square num={i}/>
  }

  render() {
    return (
      <div>
        <div id="board">
          <div className="row">
            {this.renderSquare(this.state.playerTurn)}
          {this.renderSquare(3)}
            {this.renderSquare(2)} />
          </div>


        <div id="announce-winner"></div>
        <button id="clear">Clear Board</button>
        </div>
      </div>
    );
  }
}
export default App;
