import React from 'react';
import RowComponent from '../components/RowComponent';
import ColumnComponent from '../components/ColumnComponent';

const ProductRowContainer = ({ products }) => {
  let arr = [];
  for (let i = 0; i < 3; i++) {
    if (products[i] !== undefined) {
      arr.push(<ColumnComponent product={products[i]} />);
    }
  }
  return <RowComponent arr={arr} />;
};

export default ProductRowContainer;
