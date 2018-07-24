import React from 'react';

const withMouse = Component =>
  class extends React.Component {
    constructor() {
      super();
      this.state = {
        x: 0,
        y: 0
      };
    }
    handleMouseMove = e => {
      this.setState({
        x: e.clientX,
        y: e.clientY
      });
    };
    render() {
      return (
        <div onMouseMove={this.handleMouseMove}>
          <Component {...this.props} {...this.state} />
        </div>
      );
    }
  };

export default withMouse;
