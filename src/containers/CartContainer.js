import React from 'react';
import CartItemListContainer from './CartItemListContainer';
import CartHeader from '../components/CartHeader';

const CartContainer = () => {
  return (
    <>
      <CartHeader />
      <CartItemListContainer />
    </>
  );
};

export default CartContainer;
