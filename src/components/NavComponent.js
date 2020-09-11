import React from 'react';
import NavItemComponent from './NavItemComponent';
import UncontrolledDropdownComponent from './UncontrolledDropdownComponent';
import cart from '../images/cart.jpg';
import { Nav } from 'reactstrap';
import { Link } from 'react-router-dom';

const NavComponent = () => {
  let ele = <NavItemComponent url={'/cart'} logo={cart} />;
  let ele1 = <NavItemComponent url={'/products'} lable={'Shop'} />;
  return (
    <>
      <Nav className="mr-auto" navbar>
        <Link to="/products">{ele1}</Link>
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
