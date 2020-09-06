import React from 'react';
import { CardBody } from 'reactstrap';
import { PropTypes } from 'prop-types';

const CardBodyWrapper = ({ body_content, className }) => {
  return <CardBody className={className}>{body_content}</CardBody>;
};

export default CardBodyWrapper;

CardBodyWrapper.propTypes = {
  body_content: PropTypes.array.isRequired,
  className: PropTypes.string
};
