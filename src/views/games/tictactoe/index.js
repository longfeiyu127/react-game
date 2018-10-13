
import React from 'react';
import Board from './components/Board'
import Scoreboard from './components/Scoreboard'
import Victory from './components/Victory'
import Firework from '../../../components/Firework'
import './tictactoe.less'

export default class Tictactoe extends React.Component {
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
      oWin: 0,
      xWin: 0,
      gameover: false,
    };
    this.gameover = false;
    this.line = null;
  }
  calculateWinner(squares) {
    // const {xIsNext, xWin, oWin} = this.state
    const resultArr = [
      [[0, 0],[0, 1],[0, 2]],
      [[1, 0],[1, 1],[1, 2]],
      [[2, 0],[2, 1],[2, 2]],
      [[0, 0],[1, 0],[2, 0]],
      [[0, 1],[1, 1],[2, 1]],
      [[0, 2],[1, 2],[2, 2]],
      [[0, 0],[1, 1],[2, 2]],
      [[2, 0],[1, 1],[0, 2]]
    ]
    let lineRes = null
    const res = resultArr.some(item => {
      const squareItem = squares[item[0][0]][item[0][1]]
      lineRes = item
      return squareItem && item.every(val => {
        return squareItem === squares[val[0]][val[1]]
      })
    })
    if (res) {
      this.line = res ? lineRes : null
      this.gameover = res ? true : false
    }
    return res
  }
  handleClick(i, j) {
    const {history, stepNumber, xIsNext, xWin, oWin} = this.state
    const historyArr = history.slice(0, stepNumber + 1);
    const current = historyArr[historyArr.length - 1];
    const squares = JSON.parse(JSON.stringify(current.squares));
    if (squares[i][j] || this.calculateWinner(squares)) {
      return;
    }
    squares[i][j] = xIsNext ? 'X' : 'O';
    this.setState({
      history: historyArr.concat([{
        squares: squares
      }]),
      stepNumber: historyArr.length,
      xIsNext: !xIsNext,
    });
    if (this.calculateWinner(squares)) {
      this.setState({
        oWin: !xIsNext ? oWin+1 : oWin,
        xWin: xIsNext ? xWin+1 : xWin,
      });
    }
  }

  jumpTo(step) {
    this.setState({
      stepNumber: step,
      xIsNext: (step % 2) ? false : true,
    });
  }

  reset() {
    this.gameover = false;
    this.line = null;
    this.setState({
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
    });
  }
  
  render() {
    const {oWin, xWin, history, stepNumber, xIsNext} = this.state
    const current = history[stepNumber];
    // const moves = history.map((step, _move) => {
    //   let move = isSource ? _move : history.length - _move - 1
    //   const desc = move ? ('Move #' + move) : 'Game start';
    //   return (
    //     <li key={move}>
    //       <div className="fontH" style={{fontWeight: (move === stepNumber) ? 900 : 500, cursor: 'pointer'}} onClick={() => this.jumpTo(move)}>{desc}</div>
    //     </li>
    //   );
    // });
    return (
      <div className="g-tic-game">
        <Scoreboard oWin={oWin} xWin={xWin} />
        <div className="g-tic-board">
          <Board
            squares={current.squares}
            line = {this.line}
            onClick={(i, j) => this.handleClick(i, j)}
          />
        </div>
        <div className="g-tic-info">
          <div className='operate take-back' onClick={() => this.jumpTo(stepNumber - 1)}>take back</div>
          {/* <button onClick={() => this.setState({isSource: !isSource})}>sort</button> */}
          <div className='operate reset' onClick={() => this.reset()}>reset</div>
          {/* <div>{status}</div> */}
          {/* <ol>{moves}</ol> */}
        </div>
        <Firework gameover={this.gameover}>
          <Victory winner={xIsNext ? 'playerB' : 'playerA'} reset={() => this.reset()} />
        </Firework>
      </div>
    );
  }
}