import React from 'react';
import RowWrapper from '../components/RowWrapper';
import ColumnWrapper from '../components/ColumnWrapper';
import PropTypes from 'prop-types';
import CardComponent from '../components/CardComponent';
import { addCartItem, updateItemQuantity } from '../actions/cartActions';
import { useDispatch, useSelector } from 'react-redux';

const ProductRowContainer = ({ products }) => {
  const dispatch = useDispatch();
  const { cartItemsList } = useSelector((state) => state);
  console.log('cartitemslist', cartItemsList);
  let arr = [];
  let productExists = (product) => {
    let index = cartItemsList.findIndex((cartItem) => cartItem.id === product.id);
    if (index === -1) {
      dispatch(addCartItem(product));
    } else {
      dispatch(updateItemQuantity({ id: product.id, newQuantity: product.quantity + 1 }));
    }
  };
  arr = products.map((product) => {
    if (product !== undefined) {
      return (
        <ColumnWrapper
          key={product.id}
          data={<CardComponent product={product} productExists={productExists} />}
        />
      );
    }
  });
  return <RowWrapper data={arr} />;
};

export default ProductRowContainer;

ProductRowContainer.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object).isRequired
};
