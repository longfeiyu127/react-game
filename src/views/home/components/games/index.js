import React, { Component } from "react";
import './games.less'

export default class Games extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    console.log(this.props.history)
    return (
      <div>
        <h2 className="games">游戏库</h2>
        <div onClick={() => this.props.history.push("/games/tictactoe")}>井字棋</div>
      </div>
    )
  }
};

// export default Games;

