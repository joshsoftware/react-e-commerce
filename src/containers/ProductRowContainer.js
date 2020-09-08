import React from 'react';
import RowWrapper from '../components/RowWrapper';
import ColumnWrapper from '../components/ColumnWrapper';
import PropTypes from 'prop-types';
import CardComponent from '../components/CardComponent';

const ProductRowContainer = ({ products }) => {
  let arr = [];
  arr = products.map((product) => {
    if (product !== undefined) {
      return <ColumnWrapper key={product.id} data={<CardComponent product={product} />} />;
    }
  });

  return <RowWrapper data={arr} />;
};

export default ProductRowContainer;

ProductRowContainer.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object).isRequired
};
