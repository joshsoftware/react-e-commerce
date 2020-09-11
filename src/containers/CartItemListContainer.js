import React, { useEffect } from 'react';
import ContainerWrapper from '../components/ContainerWrapper';
import CartItem from '../components/CartItem';
import { useDispatch, useSelector } from 'react-redux';
import { getCartItems } from '../actions/cartActions';

const CartItemListContainer = () => {
  console.log('cart item list');
  const dispatch = useDispatch();
  // const { userDetails } = useSelector((state) => state.loginReducer);
  // useEffect(() => {
  //   dispatch(getCartItems(userDetails.token));
  // }, []);
  const { cartItemsList, totalPrice } = useSelector((state) => state.cartReducer);
  let arr = [];
  arr = cartItemsList.map((item) => <CartItem key={item.id} item={item} dispatch={dispatch} />);
  arr.push(<p>Total Price: ${totalPrice.toFixed(2)} </p>);
  return <ContainerWrapper data={arr} />;
};

export default CartItemListContainer;
