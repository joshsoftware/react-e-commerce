import React from 'react';
import NavItemComponent from './NavItemComponent';
import UncontrolledDropdownComponent from './UncontrolledDropdownComponent';
import cart from '../images/cart.jpg';
import { Nav } from 'reactstrap';
import { Link } from 'react-router-dom';

const NavComponent = () => {
  let ele = <NavItemComponent url={'/cart'} logo={cart} />;
  return (
    <>
      <Nav className="mr-auto" navbar>
        <NavItemComponent url={'/products'} lable={'Shop'} />
        <NavItemComponent url={'/about'} lable={'About'} />
      </Nav>
      <Nav>
        <Link to="/cart">{ele}</Link>
        <UncontrolledDropdownComponent />
      </Nav>
    </>
  );
};

export default NavComponent;