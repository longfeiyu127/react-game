
import React from 'react';
import Board from './components/Board'
// import Scoreboard from './components/Scoreboard'
// import Victory from './components/Victory'
// import Firework from '../../../components/Firework'
import './fivechess.less'

//1.横向
function Crosswise(squares, i, j) {
  //前面的相同棋子
  const target=squares[i][j];
  let [prev, next] = [0, 0]
  while (true) {
    if(j-prev-1 < 0 || (squares[i][j-prev-1] !== target)){
      break
    }
    prev++
  }
  while (true) {
    if(j+next+1 > 14 || (squares[i][j+next+1] !== target)){
      break
    }
    next++
  }
  return (prev + next) === 4 ? [[i, j-prev], [i, j+next]] : false
}
//2.竖向
function Vertical(squares, i, j) {
  const target=squares[i][j];
  let [prev, next] = [0, 0]
  while (true) {
    if(i-prev-1 < 0 || (squares[i-prev-1][j] !== target)){
      break
    }
    prev++
  }
  while (true) {
    if(i+next+1 > 14 || (squares[i+next+1][j] !== target)){
      break
    }
    next++
  }
  return (prev + next) === 4 ? [[i-prev, j], [i+next, j]] : false
}
//3.左上至右下
function TopLeft(squares, i, j) {
  const target=squares[i][j];
  let [prev, next] = [0, 0]
  while (true) {
    if(i-prev-1 < 0 || j-prev-1 < 0 || (squares[i-prev-1][j-prev-1] !== target)){
      break
    }
    prev++
  }
  while (true) {
    if(i+next+1 > 14 || j+next+1 > 14 || (squares[i+next+1][j+next+1] !== target)){
      break
    }
    next++
  }
  return (prev + next) === 4 ? [[i-prev, j-prev], [i+next, j+next]] : false
}
//4.右上至左下
function TopRight(squares, i, j) {
  const target=squares[i][j];
  let [prev, next] = [0, 0]
  while (true) {
    if(i-prev-1 < 0 || j+prev+1 > 14 || (squares[i-prev-1][j+prev+1] !== target)){
      break
    }
    prev++
  }
  while (true) {
    if(i+next+1 > 14 || j-next-1 < 0 || (squares[i+next+1][j-next-1] !== target)){
      break
    }
    next++
  }
  return (prev + next) === 4 ? [[i-prev, j+prev], [i+next, j-next]] : false
}

export default class Fivechess extends React.Component {
  constructor() {
    super();
    this.state = {
      history: [{
        squares: (new Array(15)).fill((new Array(15)).fill(null))
      }],
      isBlack: true, // 'Black' 'White',
      winner: undefined
    };
  }
  calculateWinner(squares, i, j) {
    // console.log(squares)
    const piece = squares[i][j]
    const result = (Crosswise(...arguments) || Vertical(...arguments) || TopLeft(...arguments) || TopRight(...arguments)) || undefined;
    if (result) {
      console.log(result)
      this.setState({
        winner: piece
      })
    }
    return
  }
  handleClick(i, j) {
    const { history, isBlack, winner } = this.state
    const current = history[history.length - 1]
    // console.log(current.squares[i][j])
    if (current.squares[i][j] || winner) {
      return
    }
    const squares = JSON.parse(JSON.stringify(current.squares));
    squares[i][j] = isBlack ? 'Black' : 'White';
    this.calculateWinner(squares, i, j)
    this.setState({
      history: history.concat([{
        squares: squares
      }]),
      isBlack: !isBlack,
    });
  }

  jumpTo(step) {
    this.setState({
      stepNumber: step,
      xIsNext: (step % 2) ? false : true,
    });
  }

  reset() {

  }
  
  render() {
    // console.log(this.state.history)
    const { history } = this.state
    const current = history[history.length - 1];
    return (
      <div className="g-fivechess">
        五子棋
        <Board squares={current.squares} 
        onClick={(i, j) => this.handleClick(i, j)}
        />
      </div>
    );
  }
}