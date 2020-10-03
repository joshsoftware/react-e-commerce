import React from 'react';
import RowWrapper from '../components/RowWrapper';
import ColumnWrapper from '../components/ColumnWrapper';
import PropTypes from 'prop-types';
import CardComponent from '../components/CardComponent';
import { addCartItem, updateItemQuantity } from '../actions/cartActions';
import { useDispatch, useSelector } from 'react-redux';
import { updateCartItemsApi, addCartItemApi } from '../apis/cartApi';
import { updateProductStockApi } from '../apis/productApi';
import './productContainer.css';

const ProductRowContainer = ({ products, setVisible, setAlertText }) => {
  const dispatch = useDispatch();
  // const { userDetails } = useSelector((state) => state.loginReducer);
  const userDetails = JSON.parse(sessionStorage.getItem('userDetails'));
  const { cartItemsList } = useSelector((state) => state.cartReducer);
  let arr = [];
  let productExists = (product) => {
    let index = cartItemsList.findIndex((cartItem) => cartItem.id === product.id);
    updateProductStockApi({ id: product.id, stockChange: 1 });
    if (index === -1) {
      addCartItemApi({ token: userDetails.token, product_id: product.id });
      dispatch(addCartItem(product));
    } else {
      updateCartItemsApi({
        token: userDetails.token,
        product_id: product.id,
        quantity: cartItemsList[index].quantity + 1
      });
      dispatch(updateItemQuantity({ id: product.id, flag: 'addToCart' }));
    }
  };
  arr = products.map((product) => {
    if (product !== undefined) {
      if (product.disabled === false) {
        let index = cartItemsList.findIndex((cartItem) => cartItem.id === product.id);
        return (
          <ColumnWrapper
            className={'col-md-3 col-xs-3 col-sm-3 col-lg-3'}
            key={product.id}
            data={
              <CardComponent
                index={index}
                product={product}
                productExists={productExists}
                setVisible={setVisible}
                setAlertText={setAlertText}
              />
            }
          />
        );
      }
    }
  });
  return <RowWrapper className={'product-row'} data={arr} />;
};

export default ProductRowContainer;

ProductRowContainer.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object).isRequired,
  setVisible: PropTypes.func.isRequired,
  setAlertText: PropTypes.func.isRequired
};
