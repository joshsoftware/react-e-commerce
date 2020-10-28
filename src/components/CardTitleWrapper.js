import React from 'react';
import { CardTitle } from 'reactstrap';
import { PropTypes } from 'prop-types';
const CardTitleWrapper = ({ title, className }) => {
  return <CardTitle className={className}>{title}</CardTitle>;
};
export default CardTitleWrapper;

CardTitleWrapper.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string.isRequired
};
