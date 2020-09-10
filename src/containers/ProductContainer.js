import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import ProductListContainer from './ProductListContainer';
import ProductComponent from '../components/ProductComponent';

const ProductContainer = () => {
  const { userDetails } = useSelector((state) => state.loginReducer);
  if (!userDetails.token) {
    return <Redirect to="/login" />;
  }
  return (
    <>
      <ProductComponent />
      <ProductListContainer />
    </>
  );
};

export default ProductContainer;
