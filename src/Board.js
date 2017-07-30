import React from "react";
import Square from "./Square";

export default class Board extends React.Component {
  constructor(props){
    super(props);
    this.state ={
      board: new Array(9)
     }
    this.renderSquare = this.renderSquare.bind(this);
  }
  renderSquare(i){
      
      return <Square onClick={() => this.makeMove(i)} value={this.state.board[i]} />

      }

  makeMove(i) {
      console.log(i)
      let temp = this.state.playerTurn;
      const boardCpy = this.state.board.slice();
      boardCpy[i] = temp;
     
      this.setState({
        board: boardCpy,
      })
     document.getElementById(board).innerHTML(<Board board={boardCpy} /> )
      document.getElementById('board')
      if(this.winSideways(temp)){
        this.announceWin(temp);
      }
      else{
        temp === 'X' ? temp = 'O': temp ='X';
        this.setState({
          playerTurn: temp
        })
      }
    
    }
  winSideways(player) {
      let board = this.state.board;
    //  let turn = this.state.playerTurn;
      for(let i =0; i<3; i++){
        if(board[i] === player && board[i+3] === player && board[i+6] === player){
            return true;
        }
      }
    }

  announceWin(player){
    console.log('hello')
    document.getElementById('announce-winner').innerHTML(player + 'Wins!')
  }

  render(){


  return(
    <div>
      <div className="row">
        {props.renderSquare(0)}
        {props.renderSquare(1)}
        {props.renderSquare(2)}
      </div>
      <div className="row">
        {props.renderSquare(3)}
        {props.renderSquare(4)}
        {props.renderSquare(5)}
      </div>
      <div className="row">
        {props.renderSquare(6)}
        {props.renderSquare(7)}
        {props.renderSquare(8)}
      </div>
    </div>
  );

}
}


