import React from 'react';
import { CardText } from 'reactstrap';
import { PropTypes } from 'prop-types';
const CardTextWrapper = ({ text, className }) => {
  return <CardText className={className}>{text}</CardText>;
};
export default CardTextWrapper;

CardTextWrapper.propTypes = {
  className: PropTypes.string,
  text: PropTypes.string.isRequired
};
