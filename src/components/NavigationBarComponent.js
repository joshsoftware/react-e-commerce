import React, { useState } from 'react';
import search from '../images/search.svg';
import cart from '../images/cart.jpg';
import logo from '../images/logo.jpg';
import {
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';

const NavigationBarComponent = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
        <Navbar color="dark" expand="md">
            <NavbarBrand href="/">
                <img style={{width: "70px"}} src={logo} className="rounded-circle" alt="img"/>
            </NavbarBrand>
            <NavbarToggler onClick={toggle} />
            <Nav className="mr-auto" navbar>
                <NavItem>
                    <NavLink href="/components/">Shop</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="/about">About</NavLink>
                </NavItem>
            </Nav>
            <Nav>
            <NavItem>
                <NavLink href="/cart-details">
                    <img style={{width: "70px"}} src={cart} className="rounded-circle" alt="img"/>  
                </NavLink> 
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                    <img style={{width: "50px"}} src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" className="rounded" alt="img"/>
                </DropdownToggle>
                <DropdownMenu right>
                    <DropdownItem>
                        Profile
                    </DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem>
                        Logout
                    </DropdownItem>
                </DropdownMenu>
            </UncontrolledDropdown>
            </Nav>
        </Navbar>

  );
}

export default NavigationBarComponent;