import React from 'react';
import { TabBar } from 'antd-mobile';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import './index.less'
// import Routes from '../routes';
// import { routes, Routes } from '../routes';
import Games from "./games";
import Ranks from "./ranks";
import Developer from "./developer";

export default class Tab extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'games',
      hidden: false,
    };
  }

  render() {
    console.log(this.props)
    // console.log(routes)
    return (
      <div style={{ position: 'fixed', height: '100%', width: '100%', top: 0 }}>
        {/* <main>
          <Route exact path={`${this.props.match.url}/games`} component={Games}/>
          <Route exact path={`${this.props.match.url}/ranks`} component={Ranks}/>
          <Route exact path={`${this.props.match.url}/developer`} component={Developer}/>
          <Route exact path="/home" component={Games} />
        </main> */}
        <TabBar
          // unselectedTintColor="#949494"
          tintColor="#108ee9"
          barTintColor="white"
          tabBarPosition="bottom"
          hidden={this.state.hidden}
          prerenderingSiblingsNumber={0}
        >
          <TabBar.Item
            title="游戏库"
            key="games"
            icon={<i className="iconfont icon-games" />}
            selectedIcon={<i className="iconfont icon-games icon-selected" />}
            selected={this.state.selectedTab === 'games'}
            // badge={1}
            onPress={() => { 
              this.setState({ selectedTab: 'games',});
            }}
            data-seed="logId"
          >
            <Games />
          </TabBar.Item>
          <TabBar.Item
            icon={<i className="iconfont icon-ranks" />}
            selectedIcon={<i className="iconfont icon-ranks icon-selected" />}
            title="排行榜"
            key="ranks"
            // badge={'new'}
            selected={this.state.selectedTab === 'ranks'}
            onPress={() => {
              this.setState({ selectedTab: 'ranks',});
            }}
            data-seed="logId1"
          >
            <Ranks />
          </TabBar.Item>
          <TabBar.Item
            icon={<i className="iconfont icon-developer" />}
            selectedIcon={<i className="iconfont icon-developer icon-selected" />}
            title="开发者"
            key="developer"
            selected={this.state.selectedTab === 'developer'}
            onPress={() => {
              this.setState({ selectedTab: 'developer' });
            }}
          >
            <Developer />
          </TabBar.Item>
        </TabBar>
      </div>
    );
  }
}
