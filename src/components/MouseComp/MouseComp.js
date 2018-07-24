import React, { Component } from 'react';
import withMouse from '../../patterns/hoc/withMouse';

class MouseComp extends Component {
  render() {
    return (
      <div>
        The mouse Position is {this.props.x} & {this.props.y}
      </div>
    );
  }
}

export default withMouse(MouseComp);
