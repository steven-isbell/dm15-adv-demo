import React, { Component } from 'react';
import axios from 'axios';

class SwapiContainer extends Component {
  constructor() {
    super();
    this.state = {
      people: []
    };
  }
  componentDidMount() {
    axios
      .get('https://www.swapi.co/api/people')
      .then(response => this.setState({ people: response.data.results }))
      .catch(err => console.log(err));
  }
  render() {
    return <div>{this.props.render(this.state)}</div>;
  }
}

export default SwapiContainer;
