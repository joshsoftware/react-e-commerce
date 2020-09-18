import React from 'react';
import './CartHeader.css';

const CartHeader = ({header}) => {
  return (
    <div className={'header'}>
      <h1>{header}</h1>
    </div>
  );
};

export default CartHeader;
