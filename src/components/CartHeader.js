import React from 'react';
import './CartHeader.css';
import PropTypes from 'prop-types';

const CartHeader = ({ header }) => {
  return (
    <div className={'header'}>
      <h1>{header}</h1>
    </div>
  );
};

export default CartHeader;

CartHeader.propTypes = {
  header: propTypes.string
};