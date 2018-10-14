import React from 'react';
import './header.less'

export default function Header(props) {
  console.log(props)
  return (
    <header className='g-fic-header'>
      <div onClick={props.fullScreen} 
      className={['maximize', 'iconfont', props.isFullscreen() ? 'icon-minimize' : 'icon-maximize'].join(' ')}></div>
      <div className='player'>
        <div className={['spark', props.winner ? 'hide' : ''].join(' ')}></div>
        <div className={['piece', props.isBlack ? 'pieceBlack' : 'pieceWhite'].join(' ')}></div>
      </div>
    </header>
  );
}