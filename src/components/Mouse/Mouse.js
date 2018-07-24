// import react, component
// decalre Mouse class
// declare state
// declare render
// use this.props.children
// pass in state

import React, { Component } from 'react';

class Mouse extends Component {
  constructor(props) {
    super(props);

    this.state = {
      x: 0,
      y: 0
    };
  }
  handleMouseMove = e => {
    this.setState({ x: e.clientX, y: e.clientY });
  };
  render() {
    return (
      <div onMouseMove={this.handleMouseMove}>
        {this.props.children(this.state)}
      </div>
    );
  }
}

export default Mouse;
