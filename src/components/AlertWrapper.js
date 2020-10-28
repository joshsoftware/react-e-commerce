import React from 'react';
import { Alert } from 'reactstrap';
import PropTypes from 'prop-types';

const AlertWrapper = ({ className, closeClassName, color, isOpen, toggle, tag, fade, data }) => {
  return (
    <Alert
      className={className}
      closeClassName={closeClassName}
      color={color}
      isOpen={isOpen}
      toggle={toggle}
      tag={tag}
      fade={fade}>
      {data}
    </Alert>
  );
};

export default AlertWrapper;

AlertWrapper.propTypes = {
  className: PropTypes.string,
  closeClassName: PropTypes.string,
  color: PropTypes.string,
  isOpen: PropTypes.bool,
  toggle: PropTypes.func,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  fade: PropTypes.bool,
  data: PropTypes.string
};
