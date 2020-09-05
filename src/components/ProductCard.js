import React from 'react';

const ProductCard = ({ product }) => {
  let { name } = product;
  return <p>{name}</p>;
};

export default ProductCard;
