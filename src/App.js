import React, { Component } from 'react';
import './assets/styles/index.less';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Home from './views/home';
import Games from './views/games';
import RouteConfigExample from './routes/test.js'
class App extends Component {
  render() {
    return (
      <div className="App">
      {/* <Provider store={store}> */}
        <BrowserRouter>
          <Switch>
            <Route exact path="/home" component={Home} />
            <Route path="/games" component={Games} />
            <Route exact path="/routeDemo" component={RouteConfigExample} />
            <Redirect from="/" to="/home" />
          </Switch>
        </BrowserRouter>
      {/* </Provider>, */}
      </div>
    );
  }
}

export default App;
