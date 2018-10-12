import React from 'react';
import './scoreboard.less'

export default function Scoreboard(props) {
  // console.log(props)
  return (
    <header className='g-tic-scoreboard'>
      <p className='player'>playerA<i className='playerA'></i></p>
      <p className='score'>{props.xWin} : {props.oWin}</p>
      <p className='player'>playerB<i className='playerB'></i></p>
    </header>
  );
}