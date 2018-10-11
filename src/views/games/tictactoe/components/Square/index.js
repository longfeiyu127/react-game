import React from 'react';
export default function Square(props) {
  return (
    <button className="square" onClick={props.onClick} style={{color: props.heightLine ? 'red' : ''}}>
      {props.value}
    </button>
  );
}
