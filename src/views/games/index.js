import React from "react";
import { Route } from "react-router-dom";
import Tictactoe from './tictactoe'
import Fivechess from './fivechess'
import Lightning from './lightning'
import './games.less'

class Games extends React.Component {
  render() {
    return (
      <div className="g-games">
        <Route exact path={`${this.props.match.url}/tictactoe`} component={Tictactoe}/>
        <Route exact path={`${this.props.match.url}/fivechess`} component={Fivechess}/>
        <Route exact path={`${this.props.match.url}/lightning`} component={Lightning}/>
        {/* <Route exact path={`${this.props.match.url}/games`} component={Games}/>
        <Route exact path={`${this.props.match.url}/ranks`} component={Ranks}/>
        <Route exact path={`${this.props.match.url}/developer`} component={Developer}/> */}
        {/* <Route exact path="/games" component={Games} /> */}
      </div>
    );
  }
}

export default Games;

