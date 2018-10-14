import React from "react";
// import Tictactoe from './tictactoe'
// import Fivechess from './fivechess'
import './player.less'

class Player extends React.Component {

  constructor() {
    super();
    this.state = {
      playertop: '',
      left: '',
    }
  }



  render() {
    return (
      <div className="g-lig-player">
        <main className='player-main'></main>
      </div>
    );
  }
}

export default Player;