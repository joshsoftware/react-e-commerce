import React from 'react';
import NavigationBarComponent from './NavigationBarComponent';
import SideBarComponent from './SideBarComponent';
import SearchBar from './SearchBar';
const ProductComponent = () => {
  return (
    <>
      <NavigationBarComponent color="dark" expand="md" />
      <SearchBar />
      <SideBarComponent />
    </>
  );
};

export default ProductComponent;
