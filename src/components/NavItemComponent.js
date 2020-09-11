import React from 'react';
import NavLinkComponent from './NavLinkComponent';
import { NavItem } from 'reactstrap';
import PropTypes from 'prop-types';

const NavItemComponent = (props) => {
  const { url, lable, logo } = props;
  return (
    <NavItem>
      <NavLinkComponent url={url} lable={lable} logo={logo} />
    </NavItem>
  );
};

export default NavItemComponent;

NavItemComponent.propTypes = {
  url: PropTypes.string.isRequired,
  lable: PropTypes.string,
  logo: PropTypes.string
};
