import React from 'react';
import { CardTitle } from 'reactstrap';
import { PropTypes } from 'prop-types';
const CardTitleWrapper = ({ title }) => {
  return <CardTitle>{title}</CardTitle>;
};
export default CardTitleWrapper;

CardTitleWrapper.propTypes = {
  title: PropTypes.string.isRequired
};
