import React, { Component } from 'react';
import Square from './square'

class TicTacToe extends Component{
  constructor(props) {
    super(props);
    this.state = {
    };

    this.renderSquare = this.renderSquare.bind(this);
  }
  renderSquare(i){
    return <Square value={this.props.squares[i]}
    onClick={()=>this.props.onClick(i)}
    />
}
render() {
  const createBoard =()=>{
    let count=0;
    let ticTacToeBoard=[];
    console.log(this.props.row)
   
    for(let i=0;i<this.props.row*this.props.row;i++){
       ticTacToeBoard.push(
      <Square value={this.props.squares[i]}
    onClick={()=>this.props.onClick(i)}
    />
    )
  }
       return ticTacToeBoard;
  }   
    return (
        <div>
            <div className="border-row">
               {createBoard()}
            </div>
            </div>
    )
}
}

export default TicTacToe