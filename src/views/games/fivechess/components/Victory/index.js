import React from 'react';
import './victory.less'

export default function Victory(props) {
  // console.log(props)
  return (
    <div className='g-fic-victory'>
      <p className='victory'>victory： {props.winner}</p>
      <p  className='result' onClick={props.reset}>Again</p>
    </div>
  );
}