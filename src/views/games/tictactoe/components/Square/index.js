import React from 'react';
import './square.less'

export default function Square(props) {
  return (
    <button className="g-tic-square" onClick={props.onClick} style={{color: props.heightLine ? 'red' : ''}}>
      {props.value}
    </button>
  );
}
