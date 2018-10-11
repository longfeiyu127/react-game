import React, { Component } from 'react';
import './assets/styles/index.less';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Tab from './views/index';
import RouteConfigExample from './routes/test.js'
class App extends Component {
  render() {
    return (
      <div className="App">
      {/* <Provider store={store}> */}
        <BrowserRouter>
          <Switch>
            <Route exact path="/home" component={Tab} />
            <Route exact path="/routeDemo" component={RouteConfigExample} />
            <Route component={Tab} />
          </Switch>
        </BrowserRouter>
      {/* </Provider>, */}
        {/* <Tab /> */}
        {/* <RouteConfigExample /> */}
      </div>
    );
  }
}

export default App;
