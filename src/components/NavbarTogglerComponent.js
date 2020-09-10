import React from 'react';
import { NavbarToggler } from 'reactstrap';
import PropTypes from 'prop-types';

const NavbarTogglerComponent = (props) => {
  const { toggle } = props;
  return <NavbarToggler onClick={toggle} />;
};

export default NavbarTogglerComponent;

NavbarTogglerComponent.propTypes = {
  toggle: PropTypes.func.isRequired
};
