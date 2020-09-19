import React from 'react';
import './CartHeader.css';
import PropTypes from 'prop-types';
import ContainerWrapper from './ContainerWrapper';

const CartHeader = ({ header }) => {
  return (
    <ContainerWrapper className='mt-120 header'
      data={<h1>{header}</h1>}
   />
  );
};

export default CartHeader;

CartHeader.propTypes = {
  header: PropTypes.string
};
