import React, { useState } from 'react';
import NavbarBrandComponent from './NavbarBrandComponent';
import NavbarTogglerComponent from './NavbarTogglerComponent';
import NavComponent from './NavComponent';
import logo from '../images/logo.jpg';
import { Navbar } from 'reactstrap';
import PropTypes from 'prop-types';
import SideBarComponent from './SideBarComponent';

const NavigationBarComponent = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  const { className, expand } = props;

  return (
    <>
      <SideBarComponent />
      <Navbar className={className} expand={expand}>
        <NavbarBrandComponent url={'/products'} logo={logo} />
        <NavbarTogglerComponent toggle={toggle} />
        <NavComponent />
      </Navbar>
    </>
  );
};

export default NavigationBarComponent;

NavigationBarComponent.propTypes = {
  color: PropTypes.string.isRequired,
  expand: PropTypes.string
};
