import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import MenuItem from './MenuItemComponent';
import PropTypes from 'prop-types';
import Data from './Data';

const MenuComponent = ({ className }) => {
  return (
    <Menu width={'15%'} noOverlay className={className}>
      <MenuItem Data={Data}/>
    </Menu>
  );
};

export default MenuComponent;

MenuComponent.propTypes = {
  className: PropTypes.string
};
