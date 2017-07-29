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
  return <Square onClick={this.onClick} player={i} />

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
<<<<<<< HEAD
            <Square onClick={this.onClick} num={this.state.playerTurn} />
            <Square onClick={this.onClick} num={this.state.playerTurn} />
            <Square onClick={this.onClick} num={this.state.playerTurn} />
=======
            {this.renderMove(this.state.playerTurn)}
          {this.renderMove(3)}
            {this.renderMove(2)} />
>>>>>>> ff71eed8fd2f497fbc2042a9855e5fe7fd17592c
          </div>


        <div id="announce-winner"></div>
        <button id="clear">Clear Board</button>
        </div>
      </div>
    );
  }
}
export default App;
