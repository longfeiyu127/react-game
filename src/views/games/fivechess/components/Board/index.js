import React from 'react';
import Square from '../Square';
// import Pointer from '../Pointer';
import './board.less'

function inWinLine(winnerCoord, i, j) {
  const firstI = Math.min(winnerCoord[0][0],winnerCoord[4][0])
  const LastI = Math.max(winnerCoord[0][0],winnerCoord[4][0])
  if (i < firstI || i > LastI) {
    return
  }
  const firstJ = Math.min(winnerCoord[0][1], winnerCoord[4][1])
  const LastJ = Math.max(winnerCoord[0][1], winnerCoord[4][1])
  if (j < firstJ || j > LastJ) {
    return
  }
  return winnerCoord.find(item => item[0] === i && item[1] === j)
}

export default function Board(props) {
  // console.log(props)
  const {squares, winnerCoord} = props
  return (
    <div className="g-fic-board">
      <main className='board-main'>
        { squares.map((item, i) => {
            return <div className="g-fic-board-row" key={i}>
              { item.map((value, j) => <Square value={squares[i][j]}
                inWinLine = { winnerCoord && inWinLine(winnerCoord, i, j)}
                key= {j}
                onClick={() => props.onClick(i, j)}
                />) }
            </div>
          })
        }
      </main>
      <footer className='board-footer'></footer>
      {/* <Pointer line={props.line} /> */}
    </div>
  );
}