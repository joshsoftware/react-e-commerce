import React from 'react';
import NavigationBarComponent from './NavigationBarComponent';
import SideBarComponent from './SideBarComponent';
import SearchBarContainer from '../containers/SearchBarContainer';
const ProductComponent = () => {
  return (
    <>
      <NavigationBarComponent color="dark" expand="md" /><br /><br /><br /><br /><br />
      <SearchBarContainer />
      <SideBarComponent />
    </>
  );
};

export default ProductComponent;
