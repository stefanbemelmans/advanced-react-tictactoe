import React, { Component } from "react";
import Square from "./Square";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      board: Array(9).fill(null),
      playerTurn: 'X'      
    
    };
    this.baseState = this.state;
    this.reset = this.reset.bind(this);
    this.winSideways = this.winSideways.bind(this);
    }

    makeMove(i) {
      console.log(i)
      let temp = this.state.playerTurn;
      const boardCpy = this.state.board.slice();
      boardCpy[i] = temp;
     this.winSideways(this.state.playerTurn)
       temp === 'X' ? temp = 'O': temp ='X';
      this.setState({
        board: boardCpy,
        playerTurn: temp 
      })
     
    }

    renderSquare(i){
      
      return <Square onClick={() => this.makeMove(i)} value={this.state.board[i]} />

      }

    reset(){
      // let newArr = Array(3).fill(null);
      console.log("resetme!");
      this.setState(this.baseState)

        // board : newArr,
        // playerTurn : 'X'
        
    }
     
    winSideways(playerTurn) {
      let board = this.state.board;

      for(let i =0; i<3; i++){
        if(board[i] && board[i+3] &&board[i+6] === playerTurn){
          alert('playerTurn +"Wins"')   
        }
       
      }

    }
    // if(!pos){
    //   this.renderMove(this.state.playerTurn);
    //   if(this.state.playerTurn === 'X'){
    //     this.setState({
    //       playerTurn: 'Y'
    //     })
    //   }
    //     else{
    //       this.setState({
    //         playerTurn: 'X'
    //       })
    //     };
    //   }
    //   else{
    //     alert("Pick a new Square");
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
          <div className="row">
            {this.renderSquare(3)}
            {this.renderSquare(4)}
            {this.renderSquare(5)}
          </div>
          <div className="row">
            {this.renderSquare(6)}
            {this.renderSquare(7)}
            {this.renderSquare(8)}
          </div>
        <div id="announce-winner"></div>
        <button id="clear" onClick={this.reset}>Clear Board</button>
        </div>
      </div>
    );
  }
}
export default App;
