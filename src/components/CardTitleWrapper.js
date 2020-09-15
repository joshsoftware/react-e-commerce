import React from 'react';
import { CardTitle } from 'reactstrap';
import { PropTypes } from 'prop-types';
const CardTitleWrapper = ({ style, title }) => {
  return <CardTitle className={style}>{title}</CardTitle>;
};
export default CardTitleWrapper;

CardTitleWrapper.propTypes = {
  title: PropTypes.string.isRequired,
  style: PropTypes.string
};
