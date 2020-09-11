import React from 'react';
import NavigationBarComponent from './NavigationBarComponent';
import SideBarComponent from './SideBarComponent';
const ProductComponent = () => {
  return (
    <>
      <NavigationBarComponent color="dark" expand="md" />
      <SideBarComponent />
    </>
  );
};

export default ProductComponent;
