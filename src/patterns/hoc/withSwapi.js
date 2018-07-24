// import react
// declare our withSwapi HoC
// return anonymous components
// hit swapi api
// pass people to passed in Component

// export withSwapi

import React from 'react';
import axios from 'axios';

const withSwapi = Component =>
  class extends React.Component {
    constructor(props) {
      super(props);

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
      return <Component {...this.props} {...this.state} />;
    }
  };

export default withSwapi;
