import React, { Component } from 'react'
import TicTacToe from './ticTacToe';
import game from '../css_files/game.css'
import chooseTable from './chooseTable';
import Board from './ticTacToe';

export default class Game extends TicTacToe {
    constructor(props) {
        super(props);
        this.state = {
            xIsNext: true,
            stepNumber: 0,
            row:this.props.row,
            history: [
                { squares: Array(this.props.row*this.props.row).fill(null) }
            ]
        }
    }
    jumpTo(step){
        this.setState({
            stepNumber: step,
            xIsNext: true
        })
    }
    handleClick(i) {
        const history = this.state.history.slice(0, this.state.stepNumber + 1); 
        const current = history[history.length - 1]; 
        const squares = current.squares.slice(); 
        console.log(squares)
        const winner = Winner(squares);
        if (winner || squares[i]) {
            return;
        }
        squares[i] = this.state.xIsNext ? 'X' : 'O';
        this.setState({
            history: history.concat({
                squares: squares
            }),
            xIsNext: !this.state.xIsNext, 
            stepNumber: history.length 
        });

    }
    
  
    render() {
        const history = this.state.history;
        const current = history[this.state.stepNumber];
        const winner = Winner(current.squares);
        const moves = history.map((step, move) => {
            const desc = move ? 'Go to #' + move : 'Start the Game';
            return (
                <li className ="goTo"key={move}>
                    <button onClick={() => { this.jumpTo(move) }}>
                        {desc}
                    </button>
                </li>
            )
        }
        );
        let status;
        if (winner) {
            status = 'Winner is ' + winner;
        }
        
        else {
            status = 'Next Player is ' + (this.state.xIsNext ? 'X' : 'O');
        }

        return (
            <div className="gameContainer">
               <div className="game">
                <div className="game-info">
                    <p>{status}</p>
                </div>
                <div className="game-board">
                    <Board row={this.props.row} onClick={(i) => this.handleClick(i)}
                        squares={current.squares} />
                </div>
                    <ul>{moves}</ul>
               </div> </div>
        )
    }
}


function Winner(squares) {
    const lines = [
        [0, 1, 2,3],
        [4, 5,6,7],
        [8,9,10,11],
        [12,13,14,15],
        [0,4,8,12],
        [1,5,9,13],
        [2,6,10,14],
        [3,7,11,15],
        [0,5,10,15],
        [3,6,9,12]
    ];
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c,d] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[b] === squares[c] && squares[c] === squares[d]) {
            return squares[a];
        }
    }
   

    return null;
}