
import React from 'react';
import Board from './Board'

export default class Game extends React.Component {
  constructor() {
    super();
    this.state = {
      stepNumber: 0,
      history: [{
        squares: [
          [null, null, null],
          [null, null, null],
          [null, null, null],
        ],
      }],
      xIsNext: true,
      isSource: true,
      x: null,
      y: null,
    };
    this.line = null
  }
  calculateWinner(squares) {
    let _this = this
    function crosswise() {
      let x = _this.state.x
      let flag = _this.state.x && squares[x][0] && squares[x][0] === squares[x][1] && squares[x][0] === squares[x][2]
      return flag ? [[x,0], [x, 1], [x, 2]] : false
    }
    function vertical() {
      let y = _this.state.y
      let flag = _this.state.y && squares[0][y] && squares[0][y] === squares[1][y] && squares[0][y] === squares[2][y]
      return flag ? [[0,y], [1, y], [2, y]] : false
    }
    function slant() {
      let flag1 = squares[0][0] && squares[0][0] === squares[1][1] && squares[0][0] === squares[2][2]
      let flag2 = squares[0][2] && squares[0][2] === squares[1][1] && squares[0][2] === squares[2][0]
      return (flag1 || flag2) ? (flag1 ? [[0, 0], [1, 1], [2, 2]] : [[0, 2], [1, 1], [2, 0]]) : false
    }
    const flag = crosswise() || vertical() || slant()
    this.line = flag ? flag : null
    return flag
  }
  handleClick(i, j) {
    this.setState({x: i, y: j})
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[history.length - 1];
    const squares = JSON.parse(JSON.stringify(current.squares));
    if (this.calculateWinner(squares) || squares[i][j]) {
      return;
    }
    squares[i][j] = this.state.xIsNext ? 'X' : 'O';
    this.setState({
      history: history.concat([{
        squares: squares
      }]),
      stepNumber: history.length,
      xIsNext: !this.state.xIsNext,
    });
  }
  jumpTo(step) {
    this.setState({
      stepNumber: step,
      xIsNext: (step % 2) ? false : true,
    });
  }
  
  render() {
    const history = this.state.history;
    const current = history[this.state.stepNumber];
    const winner = this.calculateWinner(current.squares);
    const moves = history.map((step, _move) => {
      let move = this.state.isSource ? _move : this.state.history.length - _move - 1
      const desc = move ? ('Move #' + move) : 'Game start';
      return (
        <li key={move}>
          <div href="#" style={{fontWeight: (move === this.state.stepNumber) ? 900 : 500, cursor: 'pointer'}} onClick={() => this.jumpTo(move)}>{desc}</div>
        </li>
      );
    });

    let status;
    if (winner) {
      status = 'Winner: ' + (this.state.xIsNext ? 'O' : 'X');
    } else {
      status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
    }
    return (
      <div className="game">
        <div className="game-board">
          <Board
            squares={current.squares}
            line = {this.line}
            onClick={(i, j) => this.handleClick(i, j)}
          />

        </div>
        <div className="game-info">
          <button onClick={() => this.setState({isSource: !this.state.isSource})}>source</button>
          <div>{status}</div>
          <ol>{moves}</ol>
        </div>
      </div>
    );
  }
}