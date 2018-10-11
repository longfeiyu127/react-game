import React from 'react';
import './square.less'

export default function Square(props) {
  // console.log(props)
  return (
    <div className="g-tic-square" onClick={props.onClick} style={{color: props.heightLine ? 'red' : ''}}>
      <div className={['squareItem', props.value ? (props.value === 'O' ? 'squareItemO' : 'squareItemX') : ''].join(' ')}>{props.value}</div>
    </div>
  );
}
