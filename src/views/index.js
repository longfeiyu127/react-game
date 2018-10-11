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

  renderContent(pageText) {
    return (
      <div style={{ backgroundColor: 'white', height: '100%', textAlign: 'center' }}>
        <div style={{ paddingTop: 60 }}>Clicked “{pageText}” tab， show “{pageText}” information</div>
        <a style={{ display: 'block', marginTop: 40, marginBottom: 20, color: '#108ee9' }}
          onClick={(e) => {
            e.preventDefault();
            this.setState({
              hidden: !this.state.hidden,
            });
          }}
        >
          Click to show/hide tab-bar
        </a>
      </div>
    );
  }

  render() {
    console.log(this.props)
    // console.log(routes)
    return (
      <div style={{ position: 'fixed', height: '100%', width: '100%', top: 0 }}>
        <div>
          {
            <Switch>
              <Route path={`${this.props.match.url}/games`} component={Games}/>
              <Route path={`${this.props.match.url}/ranks`} component={Ranks}/>
              <Route path={`${this.props.match.url}/developer`} component={Developer}/>
            </Switch>
            // routes.map((route, i) => <Routes key={i} {...route} />)
            // <Switch>
            //   <Route exact path="/" component={App} />
            //   <Route exact path="/comments" component={Comments} />
            //   <Route exact path="/ranking" component={Ranking} />
            //   {/* 404 Page */}
            //   <Route component={App} />
            // </Switch>
          }
        </div>
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
            key="game"
            icon={<i className="iconfont icon-games" />}
            selectedIcon={<i className="iconfont icon-games icon-selected" />}
            selected={this.state.selectedTab === 'games'}
            // badge={1}
            onPress={() => { 
              this.setState({ selectedTab: 'games',});
              this.props.history.push('/home/games')
            }}
            data-seed="logId"
          >
          </TabBar.Item>
          <TabBar.Item
            icon={<i className="iconfont icon-ranks" />}
            selectedIcon={<i className="iconfont icon-ranks icon-selected" />}
            title="排行榜"
            key="rank"
            // badge={'new'}
            selected={this.state.selectedTab === 'ranks'}
            onPress={() => {
              this.setState({ selectedTab: 'ranks',});
              this.props.history.push('/home/ranks') 
            }}
            data-seed="logId1"
          >
          </TabBar.Item>
          <TabBar.Item
            icon={<i className="iconfont icon-developer" />}
            selectedIcon={<i className="iconfont icon-developer icon-selected" />}
            title="开发者"
            key="developer"
            selected={this.state.selectedTab === 'developer'}
            onPress={() => {
              this.setState({
                selectedTab: 'developer',
              });
            }}
          >
            {this.renderContent('My')}
          </TabBar.Item>
        </TabBar>
      </div>
    );
  }
}
