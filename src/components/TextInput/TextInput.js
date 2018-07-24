import React, { Component } from 'react';

class TextInput extends Component {
  constructor() {
    super();
    this.state = {};
  }
  handleTextChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  render() {
    console.log(this.state);
    return this.props.children({
      state: this.state,
      handleChange: this.handleTextChange
    });
  }
}

export default TextInput;
