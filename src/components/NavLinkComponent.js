import React from 'react';
import { NavLink } from 'reactstrap';
import PropTypes from 'prop-types';
import ImageComponent from './ImageComponent';

const NavLinkComponent = (props) => {
  const { url, lable, logo } = props;

  if (!logo) {
    return <NavLink href={url}>{lable}</NavLink>;
  } else {
    return (
      <NavLink href={url}>
        <ImageComponent style={{ width: '70px' }} src={logo} className="rounded-circle" alt="img" />
      </NavLink>
    );
  }
};

export default NavLinkComponent;

NavLinkComponent.propTypes = {
  url: PropTypes.string.isRequired,
  lable: PropTypes.string,
  logo: PropTypes.string
};
