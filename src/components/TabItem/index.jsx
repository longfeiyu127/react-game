import React from "react";
import './TabItem.less'

export default class Games extends React.Component {
  constructor(...props) {
    super(...props);
    this.state = {

    };
  }

  render() {
    console.log(this.props)
    const { title, abstract, path } = this.props.itemData
    const { img } = this.props
    return (
      <div className='home-TabItem'>
        <img className='TabItem-banner' src={img}></img>
        <div className='TabItem-content'>
          <h5 className='title'>{title}</h5>
          <p>{abstract}</p>
        </div>
        <div className='TabItem-button' onClick={() => this.props.history.push(path)}>打开</div>
      </div>
    )
  }
};

// export default Games;

