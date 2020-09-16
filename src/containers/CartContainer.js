import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import CartItemListContainer from './CartItemListContainer';
import CartHeader from '../components/CartHeader';
import NavigationBarComponent from '../components/NavigationBarComponent';
import Footer from '../components/Footer';
import { getCartItems } from '../actions/cartActions';

const CartContainer = () => {
  const { userDetails } = useSelector((state) => state.loginReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCartItems(userDetails.token));
  }, []);
  if (!userDetails.token) {
    return <Redirect to="/login" />;
  }
  return (
    <>
      <NavigationBarComponent color="dark" expand="md" />
      <CartHeader />
      <CartItemListContainer />
      <Footer />
    </>
  );
};

export default CartContainer;
