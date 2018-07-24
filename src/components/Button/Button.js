import React from 'react';
import PropTypes from 'prop-types';
import withMouse from '../../patterns/hoc/withMouse';
import withSwapi from '../../patterns/hoc/withSwapi';

const Button = props => {
  console.log(props);
  return (
    <button style={props.style} onClick={props.handleClick}>
      {props.children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.string,
  handleClick: PropTypes.func.isRequired,
  style: PropTypes.shape({
    color: PropTypes.string,
    background: PropTypes.string,
    borderRadius: PropTypes.string
  })
};

export default withMouse(withSwapi(Button));
