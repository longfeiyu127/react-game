import React from 'react';
import './square.less'

export default function Square(props) {
  // console.log(props)
  return (
    <div className="g-fic-square" onClick={props.onClick}>
      {/* <div className="squareItem squareBlack"></div> */}
      <div className={['squareItem', props.value ? (props.value === 'Black' ? 'squareBlack' : 'squareWhite') : 'hide'].join(' ')}></div>
      {/* <div className={['squareItem', props.value ? (props.value === 'O' ? 'squareItemO' : 'squareItemX') : ''].join(' ')}></div> */}
    </div>
  );
}
