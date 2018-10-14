import React from "react";
// import Tictactoe from './tictactoe'
// import Fivechess from './fivechess'
import './materials.less'

class Materials extends React.Component {

  constructor() {
    super();
    this.state = {

    }
  }



  render() {
    const { position, materialsType, size }  = this.props
    // console.log(position);
    // let bulletDom; 
    // switch (bulletTpey) {
    //   case 'player':
    //     bulletDom = <main className='player'></main>
    //     break;
    
    //   default:
    //     break;
    // }
    return (
      <div className="g-lig-materials" style={{top: position.top+'rem', left: position.left+'rem', height: size.height+'rem', width: size.width+'rem'}}>
      {/* style={{fontWeight: (move === stepNumber) ? 900 : 500, cursor: 'pointer'}} */}
        <main className={['materials-main', materialsType].join(' ')}></main>
      </div>
    );
  }
}

export default Materials;