import React, { Component } from 'react';
import '../App.css';

class RoadBlock extends Component {
  render() {
    const { style } = this.props
    return (
      <div className="road" style={style}>
      </div>
    );
  }
}

export default RoadBlock;
