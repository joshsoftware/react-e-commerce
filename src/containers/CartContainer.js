import React from 'react';
import CartItemListContainer from './CartItemListContainer';
import CartHeader from '../components/CartHeader';
import NavigationBarComponent from '../components/NavigationBarComponent';

const CartContainer = () => {
  return (
    <>
      <NavigationBarComponent color="dark" expand="md" />
      <CartHeader />
      <CartItemListContainer />
    </>
  );
};

export default CartContainer;
