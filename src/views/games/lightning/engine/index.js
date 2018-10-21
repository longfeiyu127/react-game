import React from "react";
// import Tictactoe from './tictactoe'
import Player from './player'
import Bullet from './bullet'
import Enemy from './enemy'
import Materials from './materials'
import Equip from './equip'
import Remains from './remains'
import './engine.less'
import EnemyConfig from '../config/EnemyConfig.json'
import BulletConfig from '../config/BulletConfig.json'
import EngineConfig from '../config/EngineConfig.json'
import PlayerConfig from '../config/PlayerConfig.json'

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
const maxHeight = window.clientHeight/window.clientWidth * 3.75
class Engine extends React.Component {
  constructor() {
    super();
    this.state = {
      // 运算状态
      EngineStatus: true,
      Enginespeed: 15,
      // Enginespeed: 100,
      // 玩家位置
      playerTop: 3.8,
      playerLeft: 1.35,
      // 子弹数组
      BulletArr: [
        // {
        //   position: {
        //     top: 2.5,
        //     left: 1.78
        //   }, // 位置
        //   targetPosition: {
        //     top: 5,
        //     left: 2
        //   }, // 目标位置
        //   size: {
        //     height: 0.14,
        //     width: 0.14
        //   }, // 大小
        //   speed: 0.02,
        //   bulletTpey: 'player', // 类型
        //   status: 'healthy',  // 状态
        // }
      ],
      // 敌机数组
      EnemyArr: [
        // {
        //   position: {
        //     top: 0,
        //     left: 1.5
        //   }, // 位置
        //   targetPosition: {
        //     top: 5,
        //     left: 2.5
        //   }, // 目标位置
        //   size: {
        //     height: 0.65,
        //     width: 0.65
        //   }, // 大小
        //   speed: 0.01,
        //   enemyType: 'enemyA0', // 类型
        //   status: 'healthy',  // 状态
        // }
      ],
      // 残骸数组
      RemainsArr: []
    }
    this.mainEngine()
    // console.log(document.documentElement.clientWidth);
    // console.log(document.documentElement.clientHeight);
  }
  componentWillMount(){
    this.keyControll()
    this.creator()
  }
  // 创建引擎
  creator() {
    setInterval(() => {
      const EnemyArr = this.createEnemy('enemyA0')
      const BulletArr = this.createBullet()
      this.setState({
        EnemyArr,
        BulletArr
      })
    }, 300)
  }
  // 移动位置/检查碰撞
  mainEngine() {
    const {EngineStatus} = this.state
    setInterval(() => {
      if (EngineStatus) {
        // 控制移动
        const EnemyArr = this.EnemyControll()
        const BulletArr = this.BulletControll()
        // console.log(EnemyArr)
        // 检查碰撞
        this.crashEngine(EnemyArr, BulletArr)
        // 处理完成，设置数据
        this.setState({
          BulletArr,
          EnemyArr,
          EngineStatus: !EngineStatus
        })
      }
    }, this.state.Enginespeed)
  }
  // 检查碰撞
  crashEngine(EnemyArr, BulletArr) {
    EnemyArr.map((EnemyItem , EnemyIndex, EnemyArr) => {
      BulletArr.map((BulletItem, BulletIndex, BulletArr) =>{
        // console.log(EnemyItem, BulletItem)
        // const { EnemyX, EnemyY, BulletX, BulletY } = {}
        const EnemyX = EnemyItem.position.left + EnemyItem.size.width * .5
        const EnemyY = EnemyItem.position.top + EnemyItem.size.height * .5
        const BulletX = BulletItem.position.left + BulletItem.size.width * .5
        const BulletY = BulletItem.position.top + BulletItem.size.height * .5
        const CenterDistance = (EnemyItem.size.width + BulletItem.size.width)*0.5
        // console.log('----x', (BulletX - EnemyX))
        // console.log('----y', (BulletY - EnemyY))
        // console.log(Math.sqrt(Math.pow(BulletX-EnemyX, 2) + Math.pow(BulletY - EnemyY, 2)))
        
        if (Math.sqrt(Math.pow(BulletX-EnemyX, 2) + Math.pow(BulletY - EnemyY, 2)) < CenterDistance) {
          const newRemains = { ...EnemyItem }
          this.state.RemainsArr.push(newRemains)
          EnemyArr.splice(EnemyIndex, 1)
          BulletArr.splice(BulletIndex, 1)
          // console.log('pengdaole')
          // console.log(EnemyX, EnemyY)
          // console.log(BulletX, BulletY)
          // console.log(EnemyItem.size.width*0.5, BulletItem.size.width*0.5)
          // console.log(Math.sqrt(Math.pow(BulletX-EnemyX, 2) + Math.pow(BulletY - EnemyY, 2)))
          // console.log((EnemyItem.size.width + BulletItem.size.width))
          // alert('pengdaole')
        }
      })
    })
  }
  EnemyEngine() {
    setInterval(() => {
      
      // console.log(EnemyType);
      // console.log(EnemyConfig[EnemyType]);
      // const EnemyArr = JSON.parse(JSON.stringify(this.state.EnemyArr))
      // const newEnemy = EnemyConfig[EnemyType]
      // switch (EnemyWeightA) {
      //   case value:
          
      //     break;
      
      //   default:
      //     break;
      // }
      // // console.log(EnemyArr);
      // EnemyArr.push(newEnemy)
      // this.setState({
      //   EnemyArr
      // })
    }, 1000);
  }
  // 处理敌机移动
  EnemyControll() {
    let EnemyArr = JSON.parse(JSON.stringify(this.state.EnemyArr))
    EnemyArr = EnemyArr.map(item => {
      // console.log(config.enemyType[item.enemyType])
      // console.log(item.speed);
      item.position.top += item.speed
      return item
    })
    // console.log(window.clientHeight)
    // console.log(window.clientHeight * 0.005)
    return EnemyArr.filter(item => item.position.top <= window.clientHeight/window.clientWidth * 3.75)
  }
  //  处理子弹移动(处理超出边界子弹)
  BulletControll() {
    let BulletArr = JSON.parse(JSON.stringify(this.state.BulletArr))
    BulletArr = BulletArr.map((item) => {
      item.position.top -= item.speed
      return item
    })
    return BulletArr.filter(item => item.position.top >= 0)
  }

  // 创建子弹
  createBullet() {
    const BulletArr = JSON.parse(JSON.stringify(this.state.BulletArr))
    const position = {
      top: this.state.playerTop,
      left: this.state.playerLeft + PlayerConfig.size.width * 0.5 - BulletConfig.player.size.width *0.5
    }
    const targetPosition = {
      top: 'min',
      left: this.playerLeft
    }
    const newBullet = {}
    Object.assign(newBullet, BulletConfig.player)
    newBullet.position = position
    newBullet.targetPosition = targetPosition
    BulletArr.push(newBullet)
    return BulletArr
  }
  

  // 创建敌机
  createEnemy(EnemyType) {
    let EnemyArr = JSON.parse(JSON.stringify(this.state.EnemyArr))
    const newEnemy = []
    const EnemyWeightA = Math.random()*100
    if (EnemyWeightA < 10) {
      newEnemy.push(this.EnemyPosition(EnemyConfig['enemyA0']))
    } else if (EnemyWeightA >= 10 && EnemyWeightA < 20) {
      newEnemy.push(this.EnemyPosition(EnemyConfig['enemyA1']))
    } else if (EnemyWeightA >= 30 && EnemyWeightA < 40) {
      newEnemy.push(this.EnemyPosition(EnemyConfig['enemyA2']))
    }
    const EnemyWeightC = Math.random()*100
    if (EnemyWeightC < 2) {
      newEnemy.push(this.EnemyPosition(EnemyConfig['enemyC']))
    }
    EnemyArr = EnemyArr.concat(newEnemy)
    return EnemyArr
  }
  EnemyPosition (enemy) {
    enemy.position.top = - 0.5*enemy.size.height
    
    enemy.position.left = Math.random()*(3.75- enemy.size.width)
    enemy.targetPosition.left = enemy.position.left
    return enemy
  }
  delRemains(index) {
    this.state.RemainsArr.splice(index, 1)
  }

  keyControll() {
    const _this = this
    document.body.onkeydown=function(evt){
      const { playerTop, playerLeft } = _this.state
      const e = evt || window.event;
      //边界判定
      switch (e.keyCode) {
        case 37:
        if (playerLeft >= 0) {
          _this.ControllPlayer({left: -config.step, top: 0})
        }
        break;
        case 38:
          if (playerTop >= 0) {
            _this.ControllPlayer({left: 0, top: -config.step})
          }
          break;
        case 39:
        if (playerLeft + PlayerConfig.size.width <= 3.75) {
          _this.ControllPlayer({left: config.step, top:0})
        }
        break;
        case 40:
          if (playerTop + PlayerConfig.size.height <= window.clientHeight/window.clientWidth * 3.75) {
            _this.ControllPlayer({left: 0, top: config.step})
          }
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
    const { playerTop, playerLeft, EnemyArr, BulletArr, RemainsArr } = this.state
    // let item = EnemyArr[0]
    // console.log(EnemyArr)
    const EnemyDom = EnemyArr.map((item, index) => (<Enemy position={item.position} size={item.size} enemyType={[item.enemyType, item.status].join(' ')} key={index} />))
    const BulletDom = BulletArr.map((item, index) => (<Bullet position={item.position} size={item.size} bulletTpey={item.bulletTpey} key={index} />))
    const RemainsDom = RemainsArr.map((item, index) => (<Remains position={item.position} size={item.size} key={index} index={index} delRemains={(index) => {this.delRemains(index)}}/>))
    // console.log(BulletDom)
    return (
      <div className="g-lig-engine">
        <div className='background'></div>
        {/* 玩家 */}
        <Player position={{top: playerTop, left: playerLeft}} />
        {/* 子弹 */}
        { BulletDom }
        {/* 敌机 */}
        { EnemyDom }
        {/* 残骸 */}
        { RemainsDom }
        {/* <Remains position={{top: 1.75, left: 0.3}} size={{height: 0.65, width: 0.65}} /> */}
        {/* 物资 */}
        {/* <Materials position={{top: 1.75, left: 0.3}} size={{height: 0.65, width: 0.65}} materialsType={'power'}/> */}
        {/* 状态 */}
        <Equip life={2} bomb={3} />
      </div>
    );
  }
}

export default Engine;