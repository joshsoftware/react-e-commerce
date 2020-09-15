import React, { useState } from 'react';
import { Alert } from 'reactstrap';
import PropTypes from 'prop-types';

const AlertWrapper = ({className, closeClassName, color, isOpen, toggle, tag, fade, transition, data}) => {
  
  return (
    <Alert 
      className={className} 
      closeClassName={closeClassName} 
      color={color} 
      isOpen={isOpen} 
      toggle={toggle}
      tag={tag}
      fade={fade}
      transition={transition} >
      {data}
    </Alert>
  );
}

export default AlertWrapper;

AlertWrapper.propTypes = {
  className: PropTypes.string,
  closeClassName: PropTypes.string,
  color: PropTypes.string, 
  isOpen: PropTypes.bool,  
  toggle: PropTypes.func,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  fade: PropTypes.bool, 
  //transition: PropTypes.shape(Fade.propTypes),
  data: PropTypes.string
}