import React, { useEffect, useState } from 'react';
import './CartItem.css';
import ColumnWrapper from './ColumnWrapper';
import RowWrapper from './RowWrapper';
import CardImgWrapper from './CardImgWrapper';
import 'bootstrap/dist/css/bootstrap.min.css';
import PropTypes from 'prop-types';
import ButtonWrapper from './ButtonWrapper';
import CardTitleWrapper from './CardTitleWrapper';
import CardTextWrapper from './CardTextWrapper';
import CartDropdownContainer from '../containers/CartDropdownContainer';
import { deleteCartItem } from '../actions/cartActions';
import { deleteCartItemApi } from '../apis/cartApi';
import { useSelector } from 'react-redux';
import { getProductByIdApi } from '../apis/productApi';

const CartItem = ({ item, dispatch }) => {
  let { product_title, image_url, product_price, quantity, id } = item;
  const { userDetails } = useSelector((state) => state.loginReducer);
  let column_content = [];
  let i = 0;
  let item_details = [];
  item_details.push(<CardTitleWrapper key={i++} title={product_title} />);
  item_details.push(<CardTextWrapper key={i++} text={'Price : $ ' + product_price} />);
  item_details.push(<CartDropdownContainer id={id} dispatch={dispatch} quantity={quantity} />);
  column_content.push(
    <ColumnWrapper
      key={i++}
      className={'col_one'}
      md={3}
      xs={3}
      sm={3}
      lg={3}
      xl={3}
      data={<CardImgWrapper src={image_url} className="img_fluid img_style" />}
    />
  );
  column_content.push(<ColumnWrapper key={i++} className={'col_two'} data={item_details} />);
  column_content.push(
    <ColumnWrapper
      key={i++}
      className={'col_three'}
      data={
        <ButtonWrapper
          buttonText={'X'}
          onClick={() => {
            deleteCartItemApi({ token: userDetails.token, product_id: id });
            dispatch(deleteCartItem(id));
          }}
        />
      }
    />
  );

  return (
    <>
      <RowWrapper className={'row_style'} data={column_content} /> <hr></hr>
    </>
  );
};

export default CartItem;

CartItem.propTypes = {
  item: PropTypes.shape({
    image_url: PropTypes.string,
    product_title: PropTypes.string,
    product_price: PropTypes.number,
    quantity: PropTypes.number,
    id: PropTypes.number
  }),
  dispatch: PropTypes.func.isRequired
};
