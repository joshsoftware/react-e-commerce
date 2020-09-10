import React from 'react';
import ProductListContainer from './ProductListContainer';
import ProductComponent from '../components/ProductComponent';

const ProductContainer = () => {
  return (
    <>
      <ProductComponent />
      <ProductListContainer />
    </>
  );
};

export default ProductContainer;
