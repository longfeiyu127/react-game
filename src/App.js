import React, { Component } from 'react';
import './assets/styles/index.less';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Hame from './views/home';
import RouteConfigExample from './routes/test.js'
class App extends Component {
  render() {
    return (
      <div className="App">
      {/* <Provider store={store}> */}
        <BrowserRouter>
          <Switch>
            <Route exact path="/home" component={Hame} />
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
