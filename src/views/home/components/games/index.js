import React from "react";
import TabItem from '../../../../components/TabItem'
import { Tabs, Badge } from 'antd-mobile';
import './games.less'
import games from '../../../../config/games.json'

const tabs = [
  { title: <Badge>全部</Badge> },
  { title: <Badge >热门</Badge> },
  // { title: <Badge text={'今日(20)'}>Second Tab</Badge> },
  { title: <Badge>分类</Badge> },
];

export default class Games extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    // console.log(games);
    // console.log(this.props.history)
    const AllGames = games.games.map((item, index) => (<TabItem itemData={item} history={this.props.history} img={require(`../../../../assets/images/games/${item.icon}`)} key={index}/>))
    return (
      <div className='home-games'>
        <Tabs tabs={tabs}
          initialPage={0}
          onChange={(tab, index) => { console.log('onChange', index, tab); }}
          onTabClick={(tab, index) => { console.log('onTabClick', index, tab); }}
        >
          <div>
            { AllGames }
          </div>
          <div>
            { AllGames }
          </div>
          <div>
            { AllGames }
          </div>
        </Tabs>
      </div>
    )
  }
};

// export default Games;

