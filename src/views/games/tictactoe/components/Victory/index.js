import React from 'react';
import './victory.less'

export default function Victory(props) {
  // console.log(props)
  return (
    <div className='g-tic-victory'>
      <p>{props.winner} 胜利了</p>
      <p onClick={props.reset}>再来</p>
    </div>
  );
}