import React from 'react';
import NavItemComponent from './NavItemComponent';
import UncontrolledDropdownComponent from './UncontrolledDropdownComponent';
import cart from '../images/cart.jpg';
import { Nav } from 'reactstrap';

const NavComponent = () => {
  return (
    <>
      <Nav className="mr-auto" navbar>
        <NavItemComponent url={'/components'} lable={'Shop'} />
        <NavItemComponent url={'/about'} lable={'About'} />
      </Nav>
      <Nav>
        <NavItemComponent url={'/about'} logo={cart} />
        <UncontrolledDropdownComponent />
      </Nav>
    </>
  );
};

export default NavComponent;
