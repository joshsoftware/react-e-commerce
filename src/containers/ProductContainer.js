import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
import ProductListContainer from './ProductListContainer';
import ProductComponent from '../components/ProductComponent';
import { getCartItems } from '../actions/cartActions';
import Footer from '../components/Footer';

const ProductContainer = () => {
  const { userDetails } = useSelector((state) => state.loginReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCartItems(userDetails.token));
  }, []);
<<<<<<< HEAD
  // if (!userDetails.token) {
  //   console.log('in products', userDetails.token);
  //   return <Redirect to="/login" />;
  // }
=======
  if (!userDetails.token) {
    return <Redirect to="/login" />;
  }
>>>>>>> 30d509507b15e5079fece652bd0cbeb7815b49bb
  return (
    <>
      <ProductComponent />
      <ProductListContainer />
      <Footer />
    </>
  );
};

export default ProductContainer;
