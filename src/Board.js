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
      if(this.winSideways(turnTemp) || boardCpy[i]){
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
  winSideways(player) {
      let board = this.state.board;
    //  let turn = this.state.playerTurn;
      for(let i =0; i<3; i++){
        if(board[i] === player && board[i+3] === player && board[i+6] === player){
          console.log("Winner");  
          return true;
        }
      }
    }

  announceWin(player){
    console.log('hello');
    // document.getElementById("announce-winner").innerHTML={player}+' Wins!';
  }
  

  render(){
      if(this.winSideways(this.state.playerTurn)){
        this.announceWin(this.state.playerTurn);
        }
                
  return(
    <div>
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
    );
    
  };
}


