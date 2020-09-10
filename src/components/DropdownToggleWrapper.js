import React from 'react';
import { DropdownToggle } from 'reactstrap';
import PropTypes from 'prop-types';

const DropdownToggleWrapper = ({ data, caret, color, className, disabled, onClick, nav, tag }) => {
  return (
    <DropdownToggle
      caret={caret}
      color={color}
      className={className}
      disabled={disabled}
      onClick={onClick}
      nav={nav}
      tag={tag}>
      {data}
    </DropdownToggle>
  );
};

export default DropdownToggleWrapper;

DropdownToggleWrapper.propTypes = {
  data: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  caret: PropTypes.bool,
  color: PropTypes.string,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  nav: PropTypes.bool,
  tag: PropTypes.any
};
