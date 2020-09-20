import React from 'react';
import { NavbarBrand } from 'reactstrap';
import PropTypes from 'prop-types';
import ImageComponent from './ImageComponent';

const NavbarBrandComponent = ({ logo }) => {
  return (
    <>
      <NavbarBrand>
        <ImageComponent style={{ width: '70px' }} src={logo} className="rounded-circle" alt="img" />
      </NavbarBrand>
    </>
  );
};

export default NavbarBrandComponent;

NavbarBrandComponent.propTypes = {
  url: PropTypes.string.isRequired,
  logo: PropTypes.string.isRequired
};
