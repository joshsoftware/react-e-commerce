import React from 'react';
import { DropdownItem } from 'reactstrap';
import PropTypes from 'prop-types';

const DropdownItemWrapper = ({
  option,
  active,
  disabled,
  divider,
  tag,
  header,
  onClick,
  className,
  cssModule,
  toggle
}) => {
  return (
    <DropdownItem
      option={option}
      active={active}
      disabled={disabled}
      divider={divider}
      tag={tag}
      header={header}
      onClick={onClick}
      className={className}
      cssModule={cssModule}
      toggle={toggle}>
      {option}
    </DropdownItem>
  );
};

export default DropdownItemWrapper;

DropdownItemWrapper.propTypes = {
  option: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  active: PropTypes.bool,
  disabled: PropTypes.bool,
  divider: PropTypes.bool,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  header: PropTypes.bool,
  onClick: PropTypes.func,
  className: PropTypes.string,
  cssModule: PropTypes.object,
  toggle: PropTypes.bool
};
