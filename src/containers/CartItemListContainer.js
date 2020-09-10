import React, { useReducer } from 'react';
import ContainerWrapper from '../components/ContainerWrapper';
import CartItem from '../components/CartItem';
import cartReducer from '../reducers/cartReducer';

const CartItemListContainer = () => {
  const [state, dispatch] = useReducer(cartReducer);
  let arr = [];
  if (state !== undefined && state.cartItemsList !== undefined) {
    arr = state.cartItemsList.map((item) => (
      <CartItem key={item.id} item={item} dispatch={dispatch} />
    ));
  }
  return <ContainerWrapper data={arr} />;
};

export default CartItemListContainer;
