import React from 'react';
import ContainerWrapper from '../components/ContainerWrapper';
import CartItem from '../components/CartItem';
import { useDispatch, useSelector } from 'react-redux';

const CartItemListContainer = () => {
  const dispatch = useDispatch();
  const { cartItemsList, totalPrice, totalDiscount, netTax } = useSelector(
    (state) => state.cartReducer
  );
  let arr = [];
  arr = cartItemsList.map((item) => <CartItem key={item.id} item={item} dispatch={dispatch} />);
  arr.push(
    <p>
      <span className={'font-weight-bold'}>Total Price</span>:{' '}
      <span className={'float-right'}>${totalPrice.toFixed(2)}</span>{' '}
    </p>
  );
  arr.push(
    <p>
      <span className={'font-weight-bold'}>Total Discount</span>:{' '}
      <span className={'float-right'}>-${totalDiscount.toFixed(2)}</span>{' '}
    </p>
  );
  arr.push(
    <p>
      <span className={'font-weight-bold'}>Net Tax</span>:{' '}
      <span className={'float-right'}>+${netTax.toFixed(2)}</span>{' '}
    </p>
  );
  arr.push(<hr></hr>);
  arr.push(
    <p>
      <span className={'font-weight-bold'}>SubTotal</span>:{' '}
      <span className={'float-right '}>${(totalPrice - totalDiscount + netTax).toFixed(2)}</span>{' '}
    </p>
  );
  return <ContainerWrapper data={arr} />;
};

export default CartItemListContainer;
