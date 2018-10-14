import React from "react";
// import Tictactoe from './tictactoe'
import Player from './player'
import Bullet from './bullet'
import Enemy from './enemy'
import Materials from './materials'
import Equip from './equip'
import './engine.less'

const step = 0.05;
class Engine extends React.Component {

  constructor() {
    super();
    this.keyControll()
    this.state = {
      // 玩家位置
      playerTop: 3.8,
      playerLeft: 1.35,
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
        <Bullet position={{top: 2.5, left: 1.78}} size={{height: 0.14, width: 0.14}} bulletTpey={'player'}/>
        <Bullet position={{top: 2.8, left: 1.78}} size={{height: 0.14, width: 0.14}} bulletTpey={'player'}/>
        <Bullet position={{top: 3.1, left: 1.78}} size={{height: 0.14, width: 0.14}} bulletTpey={'player'}/>
        <Bullet position={{top: 3.4, left: 1.78}} size={{height: 0.14, width: 0.14}} bulletTpey={'player'}/>
        <Bullet position={{top: 3.7, left: 1.78}} size={{height: 0.14, width: 0.14}} bulletTpey={'player'}/>
        <Enemy position={{top: 1.5, left: 1.6}} size={{height: 0.65, width: 0.65}} enemyType={'enemyA0'}/>
        <Enemy position={{top: 2, left: 1.4}} size={{height: 0.65, width: 0.65}} enemyType={'enemyA0 explosion'}/>
        <Enemy position={{top: 0.6, left: 1.3}} size={{height: 0.65, width: 0.65}} enemyType={'enemyA1'}/>
        <Enemy position={{top: 2.1, left: 2.8}} size={{height: 0.65, width: 0.65}} enemyType={'enemyA2'}/>
        <Enemy position={{top: 5.1, left: .8}} size={{height: 0.8, width: 0.8}} enemyType={'enemyC'}/>
        <Materials position={{top: 1.75, left: 0.3}} size={{height: 0.65, width: 0.65}} materialsType={'power'}/>
        <Equip life={2} bomb={3} />
      </div>
    );
  }
}

export default Engine;