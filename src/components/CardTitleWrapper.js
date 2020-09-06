import React from 'react';
import { CardTitle } from 'reactstrap';
import { PropTypes } from 'prop-types';

const CardTitleWrapper = ({ title, className }) => {
  return <CardTitle className={className}>{title}</CardTitle>;
};

export default CardTitleWrapper;

CardTitleWrapper.propTypes = {
  title: PropTypes.string.isRequired,
  className: PropTypes.string
};
