import React from 'react';
import './pointer.less'

function slantType (line) {
  return line && line.every(item => item[0] === item[1])
}

function checkLineType (line) {
  if (line) {
    const x = line[0][1]
    const y = line[0][0]
    if (line.every(item => x === item[1])) {
      return 'c'
    } else if (line.every(item => y === item[0])) {
      return 'v'
    } else {
      return 's'
    }
  }
}

export default function Pointer(props) {
  console.log(props)
  const { line } = props
  let lineType = checkLineType(line);
  return (
    <div className={['g-tic-pointer', line ? '' : 'hide'].join(' ')}>
      <div className={['pointer', 'crosswise', lineType && lineType === 'c' ? ('crosswise' + line[0][1]) : 'hide'].join(' ')}></div>
      <div className={['pointer', 'vertical', lineType && lineType === 'v' ? ('vertical' + line[0][0]) : 'hide'].join(' ')}></div>
      <div className={['pointer', 'slant', lineType && lineType === 's' ? (slantType(line) ? 'slant0' : 'slant1') : 'hide'].join(' ')}></div>
    </div>
  );
}