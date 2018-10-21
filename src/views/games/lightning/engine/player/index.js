import React from "react";
// import Tictactoe from './tictactoe'
// import Fivechess from './fivechess'
import './player.less'
import PlayerConfig from '../../config/PlayerConfig.json'


const size = PlayerConfig.size;

class Player extends React.Component {

  constructor() {
    super();
    this.state = {
      // playertop: '',
      // left: '',
    }
  }



  render() {
    const { position }  = this.props
    // console.log(position);
    return (
      <div className="g-lig-player" style={{top: position.top+'rem', left: position.left+'rem', height: size.height+'rem', width: size.width+'rem'}}>
      {/* style={{fontWeight: (move === stepNumber) ? 900 : 500, cursor: 'pointer'}} */}
        <main className='player-main'></main>
      </div>
    );
  }
}

export default Player;