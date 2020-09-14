import React from 'react';
import ContainerWrapper from '../components/ContainerWrapper';
import CartItem from '../components/CartItem';
import { useDispatch, useSelector } from 'react-redux';

const CartItemListContainer = () => {
  const dispatch = useDispatch();
  const { cartItemsList, totalPrice } = useSelector((state) => state.cartReducer);
  let arr = [];
  arr = cartItemsList.map((item) => <CartItem key={item.id} item={item} dispatch={dispatch} />);
  arr.push(<p>Total Price: ${totalPrice.toFixed(2)} </p>);
  return <ContainerWrapper data={arr} />;
};

export default CartItemListContainer;
