import React from 'react';
import RowWrapper from '../components/RowWrapper';
import ColumnWrapper from '../components/ColumnWrapper';
import PropTypes from 'prop-types';
import CardComponent from '../components/CardComponent';

const ProductRowContainer = ({ products }) => {
  let arr = [];
  for (let i = 0; i < 3; i++) {
    if (products[i] !== undefined) {
      arr.push(
        <ColumnWrapper key={products[i].id} data={<CardComponent product={products[i]} />} />
      );
    }
  }
  return <RowWrapper data={arr} />;
};

export default ProductRowContainer;

ProductRowContainer.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object).isRequired
};
