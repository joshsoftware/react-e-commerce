import React, { useReducer } from 'react';
import RowWrapper from '../components/RowWrapper';
import ColumnWrapper from '../components/ColumnWrapper';
import PropTypes from 'prop-types';
import CardComponent from '../components/CardComponent';
import cartReducer from '../reducers/cartReducer';
import { addCartItem, updateItemQuantity } from '../actions/cartActions';

const ProductRowContainer = ({ products }) => {
  const [state, dispatch] = useReducer(cartReducer);
  let arr = [];
  let productExists = (product) => {
    if (state === undefined) {
      dispatch(addCartItem(product));
    } else {
      let index = state.cartItemsList.findIndex((cartItem) => cartItem.id === product.id);
      if (index === -1) {
        dispatch(addCartItem(product));
      } else {
        dispatch(updateItemQuantity({ id: product.id, newQuantity: product.quantity + 1 }));
      }
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
