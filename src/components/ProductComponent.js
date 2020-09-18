import React from 'react';
import NavigationBarComponent from './NavigationBarComponent';
import SearchBarContainer from '../containers/SearchBarContainer';
import SideBarComponent from './SideBarComponent';
import ColumnWrapper from './ColumnWrapper';
import RowWrapper from './RowWrapper';
import ContainerWrapper from './ContainerWrapper';
const ProductComponent = () => {
  return (
    <>
      <NavigationBarComponent className="navClass fixed-top" expand="md" />
      <br />
      <br />
      <br />
      <SideBarComponent />
      <ContainerWrapper
        data={
          <RowWrapper
            data={
              <>
                <ColumnWrapper className={'col-4'} />
                <ColumnWrapper className={'col-6'} data={<SearchBarContainer />} />
                <ColumnWrapper />
              </>
            }
          />
        }
      />
    </>
  );
};

export default ProductComponent;
