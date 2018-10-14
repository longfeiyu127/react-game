import React from "react";
// import Tictactoe from './tictactoe'
import Player from './player'
import Bullet from './bullet'
import './engine.less'

const step = 0.05;
class Engine extends React.Component {

  constructor() {
    super();
    this.keyControll()
    this.state = {
      // 玩家位置
      playerTop: 3.8,
      playerLeft: 1.6,
      // 玩家子弹数组
      // 玩家导弹数组
      // 敌方子弹数组
    }
  }

  keyControll() {
    const _this = this
    document.body.onkeydown=function(evt){
      const e = evt || window.event;
      //边界判定
      switch (e.keyCode) {
        case 37:
        _this.ControllPlayer({left: -step, top: 0})
        break;
        case 38:
        _this.ControllPlayer({left: 0, top: -step})
          break;
        case 39:
        _this.ControllPlayer({left: step, top:0})
          break;
        case 40:
        _this.ControllPlayer({left: 0, top: step})
          break;
        default:
          break;
      }
    }
  }

  ControllPlayer(positionChange) {
    // console.log(positionChange)
    const { playerTop, playerLeft } = this.state
    this.setState({
      playerTop: parseInt((playerTop + positionChange.top)*100)/100,
      playerLeft: parseInt((playerLeft + positionChange.left)*100)/100,
    })
  }

  render() {
    const { playerTop, playerLeft } = this.state
    return (
      <div className="g-lig-engine">
        <div className='background'></div>
        <Player position={{top: playerTop, left: playerLeft}} />
        <Bullet position={{top: 2.5, left: 1.6}} size={{height: 0.14, width: 0.14}} bulletTpey={'player'}/>
      </div>
    );
  }
}

export default Engine;