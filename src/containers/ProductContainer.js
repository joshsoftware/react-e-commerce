import React from 'react';
import ProductListContainer from './ProductListContainer';
import ProductComponent from '../components/ProductComponent';
// import ButtonWrapper from '../components/ButtonWrapper';
import { Link } from 'react-router-dom';

const ProductContainer = () => {
  return (
    <>
      <ProductComponent />
      <Link to="/cart">CART</Link>
      <ProductListContainer />
    </>
  );
};

export default ProductContainer;
