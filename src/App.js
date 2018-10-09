import React, { Component } from 'react';
import Game from './components/Game'
import './App.css'
import './assets/styles/thenme.less'
import Tab from './views/index'
class App extends Component {
  render() {
    return (
      <div className="App">
        <Tab />
      </div>
    );
  }
}

export default App;
