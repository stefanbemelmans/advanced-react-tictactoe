import React, { Component } from "react";
import Square from "./Square";

class App extends Component {
  constructor() {
    super();
    this.state = {

    };
  }
  render() {
    return (
      <div>
        <div id="board">
          <div className="row">
            <Square num={0} />
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
export default App;
