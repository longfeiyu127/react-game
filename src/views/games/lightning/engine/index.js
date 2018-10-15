import React from "react";
// import Tictactoe from './tictactoe'
import Player from './player'
import Bullet from './bullet'
import Enemy from './enemy'
import Materials from './materials'
import Equip from './equip'
import './engine.less'

const config = {
  step: 0.05, // 控住步长
  bulletTpey: {
    // 玩家子弹
    player: {
      size:{

      },
      position: {

      }
    }
    // 玩家导弹
    // 敌机子弹
  },
  enemyType: {
    enemyA0: {
      size: {
        height: 0,
        width: 2
      },
      position: {
        top: 0,
        left: 2
      },
      targetPosition: {
        top: 5,
        left: 2
      },
      HP: '',
      speed: 0.01
    }
  }
}
class Engine extends React.Component {

  constructor() {
    super();
    this.keyControll()
    this.state = {
      // 运算状态
      EngineStatus: true,
      Enginespeed: 100,
      // 玩家位置
      playerTop: 3.8,
      playerLeft: 1.35,
      // 子弹数组
      BulletArr: [
        {
          position: '', // 位置
          targetPosition: '', // 目标位置
          size: '', // 大小
          bulletTpey: '', // 类型
          status: '',  // 状态
        }
      ],
      // 敌机数组
      EnemyArr: [
        {
          position: {
            top: 0,
            left: 2
          }, // 位置
          targetPosition: {
            top: 5,
            left: 2
          }, // 目标位置
          size: {
            height: 0.65,
            width: 0.65
          }, // 大小
          enemyType: 'enemyA0', // 类型
          status: 'healthy',  // 状态
        }
      ]
    }
    this.mainEngine()
  }

  // 移动位置/检查碰撞
  mainEngine() {
    const {EngineStatus} = this.state
    setInterval(() => {
      if (EngineStatus) {
        // const BulletArr = this.BulletControll()
        const EnemyArr = this.EnemyControll()
        console.log(EnemyArr)
        // 处理完成，设置数据
        this.setState({
          // BulletArr,
          EnemyArr,
          EngineStatus: !EngineStatus
        })
      }
    }, this.state.Enginespeed)
  }
  // 处理敌机移动
  EnemyControll() {
    const EnemyArr = JSON.parse(JSON.stringify(this.state.EnemyArr))
    console.log(config.enemyType)
    return EnemyArr.map(item => {
      console.log(item)
      console.log(item.enemyType)
      console.log(config.enemyType[item.enemyType])
      item.position.top += config.enemyType[item.enemyType].speed
      return item
    })
  }
  //  处理子弹移动(处理超出边界子弹)
  BulletControll() {
    const BulletArr = JSON.parse(JSON.stringify(this.state.BulletArr))
    console.log(config.enemyType)
    return BulletArr.map(item => {
      item.position.top += config.enemyType[item.enemyType].speed
      // return item
    })
  }

  // 创建子弹
  // 创建敌机
  createEnemy() {
    const newEnemy = {
      position: {
        top: 0,
        left: 2
      }, // 位置
      targetPosition: {
        top: 5,
        left: 2
      }, // 目标位置
      size: {
        height: 0.65,
        width: 0.65
      }, // 大小
      enemyType: 'enemyA0', // 类型
      status: 'healthy',  // 状态
    }
  }

  keyControll() {
    const _this = this
    document.body.onkeydown=function(evt){
      const e = evt || window.event;
      //边界判定
      switch (e.keyCode) {
        case 37:
        _this.ControllPlayer({left: -config.step, top: 0})
        break;
        case 38:
        _this.ControllPlayer({left: 0, top: -config.step})
          break;
        case 39:
        _this.ControllPlayer({left: config.step, top:0})
          break;
        case 40:
        _this.ControllPlayer({left: 0, top: config.step})
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
    const { playerTop, playerLeft, EnemyArr } = this.state
    // let item = EnemyArr[0]
    // console.log(item)
    const EnemyDom = EnemyArr.map((item, index) => (<Enemy position={item.position} size={item.size} enemyType={[item.enemyType, item.status].join(' ')} key={index} />))

    return (
      <div className="g-lig-engine">
        <div className='background'></div>
        <Player position={{top: playerTop, left: playerLeft}} />
        <Bullet position={{top: 2.5, left: 1.78}} size={{height: 0.14, width: 0.14}} bulletTpey={'player'}/>
        <Bullet position={{top: 2.8, left: 1.78}} size={{height: 0.14, width: 0.14}} bulletTpey={'player'}/>
        <Bullet position={{top: 3.1, left: 1.78}} size={{height: 0.14, width: 0.14}} bulletTpey={'player'}/>
        <Bullet position={{top: 3.4, left: 1.78}} size={{height: 0.14, width: 0.14}} bulletTpey={'player'}/>
        <Bullet position={{top: 3.7, left: 1.78}} size={{height: 0.14, width: 0.14}} bulletTpey={'player'}/>
        { EnemyDom }
        {/* <Enemy position={item.position} size={item.size} enemyType={[item.enemyType, item.status].join(' ')} /> */}
        {/* <Enemy position={{top: 1.5, left: 1.6}} size={{height: 0.65, width: 0.65}} enemyType={'enemyA0'}/>
        <Enemy position={{top: 2, left: 1.4}} size={{height: 0.65, width: 0.65}} enemyType={'enemyA0 explosion'}/>
        <Enemy position={{top: 0.6, left: 1.3}} size={{height: 0.65, width: 0.65}} enemyType={'enemyA1'}/>
        <Enemy position={{top: 2.1, left: 2.8}} size={{height: 0.65, width: 0.65}} enemyType={'enemyA2'}/>
        <Enemy position={{top: 5.1, left: .8}} size={{height: 0.8, width: 0.8}} enemyType={'enemyC'}/> */}
        <Materials position={{top: 1.75, left: 0.3}} size={{height: 0.65, width: 0.65}} materialsType={'power'}/>
        <Equip life={2} bomb={3} />
      </div>
    );
  }
}

export default Engine;