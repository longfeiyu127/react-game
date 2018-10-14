import React from 'react';
// import PropTypes from 'prop-types';
import './firework.less';

// Display firework animation when game over
// export default class Firework extends React.Component {
//   // Render once, as no props and state
//   // shouldComponentUpdate() {
//   //   return false;
//   // }

//   render() {
//     return (
//       <div className={['firework-box', 'hide']}>
//         <div className="firework">
//           <div className="before" />
//           <div className="after" />
//         </div>
//       </div>
//     );
//   }
// }

export default function Firework(props) {
  // console.log(props)
  return (
    <div className={['firework-box', props.gameover ? '' : 'hide'].join(' ')}>
      <div className="firework">
        <div className="before" />
        <div className="after" />
      </div>
      {props.children}
    </div>
  );
}

