import React from "react";
import Square from "./Square";

export default class Board extends React.Component {
  constructor(props){
    super(props);
    this.state ={
      board: new Array(9),
      playerTurn: 'X'
     }
    this.renderSquare = this.renderSquare.bind(this);
    this.baseState = this.state;
    this.reset = this.reset.bind(this);
    this.winSideways = this.winSideways.bind(this);
    this.makeMove = this.makeMove.bind(this);
  }
  
  renderSquare(i){
    return <Square onClick={() => this.makeMove(i)} value={this.state.board[i]} />
  }
  
  reset(){
    console.log("resetme!");
    this.setState(this.baseState)
    document.getElementById("announce-winner").innerHTML="";
  }

  makeMove(i) {
      console.log('making thet move');
      let turnTemp = this.state.playerTurn;
      const boardCpy = this.state.board.slice();
      if(this.winSideways(boardCpy) || boardCpy[i]){
        alert('Pick a new Square!')
      }
      else{
      boardCpy[i] = turnTemp;
      turnTemp === 'X' ? turnTemp = 'O' : turnTemp = 'X';
      
      this.setState({
        board: boardCpy,
        playerTurn: turnTemp
        })
    }
  }
  // winSideways(player) {
  //     let board = this.state.board;
  //   //  let turn = this.state.playerTurn;
  //     for(let i =0; i<3; i++){
  //       if(board[i] === player && board[i+3] === player && board[i+6] === player){
  //         console.log("Winner");  
  //         return true;
  //       }
  //     }
  //   }
winSideways(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}
  announceWin(player){
    console.log('hello');
    document.getElementById("announce-winner").innerHTML= player +' Wins!';
  }
  

  render(){
    let winner = this.winSideways(this.state.board)
      if(winner){
        this.announceWin(winner);
        }
                
  return(
    <div>
      <div>{this.state.playerTurn}'s Turn</div>
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
       
       <button id="clear" onClick={this.reset}>Clear Board</button>
    </div>
    );
    
  };
}


