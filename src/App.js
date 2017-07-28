import React, { Component } from "react";
import Square from "./Square";

class App extends Component {
  constructor() {
    super();
    this.state = {
      playerTurn: ''

    };
    this.onClick = this.onClick.bind(this);

    }
renderMove(i){
  return <Square num={i} />

}

    onClick(e) {
      console.log(e);
      const pos = e.target.innerHTML;
      console.log(pos);
      if(!pos){
        this.renderMove(this.state.playerTurn);
        if(this.state.playerTurn === 'X'){
          this.setState({
            playerTurn: 'Y'
          })
        }
          else{
            this.setState({
              playerTurn: 'X'
            })
          };
        }
        else{
          alert("Pick a new Square");
        }
      }



  render() {

    return (
      <div>
        <div id="board">
          <div className="row">
            {this.renderMove(this.state.playerTurn)}
          {this.renderMove(3)}
            {this.renderMove(2)} />
          </div>


        <div id="announce-winner"></div>
        <button id="clear">Clear Board</button>
        </div>
      </div>
    );
  }
}
export default App;
