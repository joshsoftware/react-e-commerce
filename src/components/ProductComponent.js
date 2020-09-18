import React from 'react';
import NavigationBarComponent from './NavigationBarComponent';
import SearchBarContainer from '../containers/SearchBarContainer';
import SideBarComponent from './SideBarComponent';
import ColumnWrapper from './ColumnWrapper';
import RowWrapper from './RowWrapper';
const ProductComponent = () => {
  return (
    <>
      <NavigationBarComponent className="navClass fixed-top" expand="md" />
      <br />
      <br />
      <br />
      <RowWrapper
        className="sticky-top"
        data={
          <>
            <ColumnWrapper xs={4} data={<SideBarComponent />} />
            <ColumnWrapper xs={8} data={<SearchBarContainer />} />
          </>
        }
      />
    </>
  );
};

export default ProductComponent;
