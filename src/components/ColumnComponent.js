import React from 'react';
import { Col } from 'reactstrap';
import ProductCard from './ProductCard';

const ColumnComponent = ({ product }) => {
  return (
    <Col xs="4">
      <ProductCard product={product} />
    </Col>
  );
};

export default ColumnComponent;
