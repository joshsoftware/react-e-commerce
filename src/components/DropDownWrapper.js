import React from 'react';
import { Dropdown } from 'reactstrap';
import PropTypes from 'prop-types';

const DropDownWrapper = ({
  data,
  a11y,
  disabled,
  direction,
  group,
  isOpen,
  nav,
  active,
  inNavbar,
  tag,
  toggle,
  setActiveFromChild
}) => {
  return (
    <Dropdown
      a11y={a11y}
      disabled={disabled}
      direction={direction}
      group={group}
      isOpen={isOpen}
      nav={nav}
      active={active}
      inNavbar={inNavbar}
      tag={tag}
      toggle={toggle}
      setActiveFromChild={setActiveFromChild}>
      {data}
    </Dropdown>
  );
};

export default DropDownWrapper;

DropDownWrapper.propTypes = {
  data: PropTypes.array,
  a11y: PropTypes.bool,
  disabled: PropTypes.bool,
  direction: PropTypes.oneOf(['up', 'down', 'left', 'right']),
  group: PropTypes.bool,
  isOpen: PropTypes.bool,
  nav: PropTypes.bool,
  active: PropTypes.bool,
  inNavbar: PropTypes.bool,
  tag: PropTypes.string,
  toggle: PropTypes.func,
  setActiveFromChild: PropTypes.bool
};
