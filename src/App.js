import React, { Component } from "react";
// import Square from "./Square";
import Board from "./Board";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // board: new Array(9),
      // playerTurn: 'X'      
    
    };
    // this.baseState = this.state;
    // this.reset = this.reset.bind(this);
    // this.winSideways = this.winSideways.bind(this);
    // this.renderSquare = this.renderSquare.bind(this);
    }

    

  // renderSquare(i){
    
  //   return <Square onClick={() => this.makeMove(i)} value={this.state.board[i]} />

  //   }
  
  // renderBoard(grid){
  //   <Board squares={grid} />
  // }
  // reset(){
  //   // let newArr = Array(3).fill(null);
  //   console.log("resetme!");
  //   this.setState(this.baseState)

      // board : newArr,
      // playerTurn : 'X'
     
  // winSideways(player) {
  //   let board = this.state.board;
  // //  let turn = this.state.playerTurn;
  //   for(let i =0; i<3; i++){
  //     if(board[i] === player && board[i+3] === player && board[i+6] === player){
  //         return true;
  //     }
  //   }
  // }

  // announceWin(player){
  //   console.log('hello')
  //   document.getElementById('announce-winner').innerHTML(player + 'Wins!')
  // }

  // makeMove(i) {
  //   console.log(i)
  //   let temp = this.state.playerTurn;
  //   const boardCpy = this.state.board.slice();
  //   boardCpy[i] = temp;
    
  //   this.setState({
  //     board: boardCpy,
  //   })
  //  document.getElementById(board).innerHTML(<Board board={boardCpy} /> )
  //   document.getElementById('board')
  //   if(this.winSideways(temp)){
  //     this.announceWin(temp);
  //   }
  //   else{
  //     temp === 'X' ? temp = 'O': temp ='X';
  //     this.setState({
  //       playerTurn: temp
  //     })
  //   }
  
  // }
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
      <div id="board">
        <Board />
       <div id="announce-winner"></div>
      </div>
      
    );
  }
}
export default App;
