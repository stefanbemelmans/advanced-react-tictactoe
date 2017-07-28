import React, { Component } from "react";
import Square from "./Square";

class Game extends Component {
  constructor() {
    super();
    this.state = {
      playerTurn: '-'

    };
    this.handleClick = this.handleClick(bind).this;

  }

  handleClick(e) {
    console.log(e.target);
  }
  render() {

    return (
      <div>
        <div id="board">
          <div className="row">
            <Square num={this.state.playerTurn} />
            <Square num={this.state.playerTurn} />
            <Square num={this.state.playerTurn} />
          </div>


        <div id="announce-winner"></div>
        <button id="clear">Clear Board</button>
        </div>
      </div>
    );
  }
}
export default Game;
