import React, { Component } from "react";
import { Route } from "react-router-dom";
import Tictactoe from './tictactoe'
import './games.less'

class Games extends Component {
  render() {
    return (
      <div className="g-games">
        <Route exact path={`${this.props.match.url}/tictactoe`} component={Tictactoe}/>
        {/* <Route exact path={`${this.props.match.url}/games`} component={Games}/>
        <Route exact path={`${this.props.match.url}/ranks`} component={Ranks}/>
        <Route exact path={`${this.props.match.url}/developer`} component={Developer}/> */}
        {/* <Route exact path="/games" component={Games} /> */}
      </div>
    );
  }
}

export default Games;

