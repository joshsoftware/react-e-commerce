import React from 'react';
import { CardText } from 'reactstrap';
import { PropTypes } from 'prop-types';
const CardTextWrapper = ({ text }) => {
  return <CardText>{text}</CardText>;
};
export default CardTextWrapper;

CardTextWrapper.propTypes = {
  text: PropTypes.string.isRequired
};
