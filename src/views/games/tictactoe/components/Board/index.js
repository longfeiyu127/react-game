import React from 'react';
import Square from '../Square';
import Pointer from '../Pointer';
import './board.less'

export default function Board(props) {
  return (
    <div className="g-tic-board">
      { props.squares.map((item, i) => {
          return <div className="g-tic-board-row" key={i}>
            { item.map((value, j) => <Square value={props.squares[i][j]}
              key= {j}
              heightLine = {
                props.line && props.line.some((v) => {
                  return v[0] === i && v[1] === j
                })
              }
              onClick={() => props.onClick(i, j)} />) }
          </div>
        })
      }
      <Pointer line={props.line} />
    </div>
  );
}