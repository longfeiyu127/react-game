import React from 'react';
import Square from '../Square';
// import Pointer from '../Pointer';
import './board.less'

export default function Board(props) {
  // console.log(props)
  return (
    <div className="g-fic-board">
      { props.squares.map((item, i) => {
          return <div className="g-fic-board-row" key={i}>
            { item.map((value, j) => <Square value={props.squares[i][j]}
              key= {j}
              onClick={() => props.onClick(i, j)}
              />) }
          </div>
        })
      }
      {/* <Pointer line={props.line} /> */}
    </div>
  );
}