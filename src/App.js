import React, { Component } from "react";
import Square from "./Square";

class App extends Component {
  constructor() {
    super();
    this.state = {
      board: Array(3).fill(null),
      playerTurn: 'X'      
    };
    

    }

    makeMove(i) {
      console.log(i)
      let temp = this.state.playerTurn;
      const boardCpy = this.state.board.slice();
      boardCpy[i] = temp;
       temp === 'X' ? temp = 'O': temp ='X';
      this.setState({
        board: boardCpy,
        playerTurn: temp 
      })
    }

  renderSquare(i){
    
    return <Square onClick={() => this.makeMove(i)} value={this.state.board[i]} />

    }

  onClick(){
   
    this.setState({
      board: '',
      playerTurn: 'X'
    })
  }
      
    //  { // if(!pos){
    //   //   this.renderMove(this.state.playerTurn);
    //   //   if(this.state.playerTurn === 'X'){
    //   //     this.setState({
    //   //       playerTurn: 'Y'
    //   //     })
    //   //   }
    //   //     else{
    //   //       this.setState({
    //   //         playerTurn: 'X'
    //   //       })
    //   //     };
    //   //   }
    //   //   else{
    //   //     alert("Pick a new Square");
    //   //   }
    //   // }
    //   }
    // }

  render() {

    return (
      <div>
        <div id="board">
          <div className="row">
            {this.renderSquare(0)}
            {this.renderSquare(1)}
            {this.renderSquare(2)}
          </div>


        <div id="announce-winner"></div>
        <button id="clear" onClick={() => this.onClick}>Clear Board</button>
        </div>
      </div>
    );
  }
}
export default App;
