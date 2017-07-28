import React, { Component } from "react";
import Square from "./Square";

class Game extends Component {
  constructor() {
    super();
    this.state = {
      playerTurn: 'X'

    };

    move(i)
  }
  render() {
    return (
      <div>
        <div id="board">
          <div className="row">
            <Square num={this.state.playerTurn} />
            <Square num={1} />
            <Square num={2} />
          </div>


        <div id="announce-winner"></div>
        <button id="clear">Clear Board</button>
        </div>
      </div>
    );
  }
}
export default Game;
