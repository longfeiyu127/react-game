import React from "react";
// import Tictactoe from './tictactoe'
// import Fivechess from './fivechess'
import './remains.less'

class Remains extends React.Component {

  constructor() {
    super();
    this.state = {

    }
  }
  componentDidMount() {
    setTimeout(() => {
      this.props.delRemains(this.props.index)
    }, 1550);
  }

  render() {
    const { position, size }  = this.props
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
      <div className="g-lig-remains" style={{top: position.top+'rem', left: position.left+'rem', height: size.height+'rem', width: size.width+'rem'}}>
      {/* style={{fontWeight: (move === stepNumber) ? 900 : 500, cursor: 'pointer'}} */}
        <main className='remains-main'></main>
      </div>
    );
  }
}

export default Remains;