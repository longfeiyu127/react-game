import React from "react";
// import Tictactoe from './tictactoe'
import Player from './player'
import './engine.less'

class Engine extends React.Component {

  constructor() {
    super();
    this.state = {
      top: '',
      left: '',
    }
  }

  render() {
    return (
      <div className="g-lig-engine">
        <div className='background'></div>
        <Player />
      </div>
    );
  }
}

export default Engine;