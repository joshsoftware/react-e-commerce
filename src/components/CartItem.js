import React from 'react';
import './CartItem.css';
import ColumnWrapper from './ColumnWrapper';
import RowWrapper from './RowWrapper';
import CardImgWrapper from './CardImgWrapper';
import 'bootstrap/dist/css/bootstrap.min.css';
import PropTypes from 'prop-types';
import ButtonWrapper from './ButtonWrapper';
import CardTextWrapper from './CardTextWrapper';
import { deleteCartItem } from '../actions/cartActions';
import { deleteCartItemApi } from '../apis/cartApi';
import { useSelector } from 'react-redux';
import { Alert } from 'reactstrap';
import InputSpinnerContainer from '../containers/InputSpinnerContainer';

const CartItem = ({ item, dispatch }) => {
  let { product_title, image_url, product_price, quantity, tax, discount, id } = item;
  const { userDetails } = useSelector((state) => state.loginReducer);
  let column_content = [];
  let i = 0;
  let item_details = [];
  let item_price_details_key = [];
  item_price_details_key.push(
    <CardTextWrapper className={'font-weight-bold'} key={i++} text={'Price     :  '} />
  );
  item_price_details_key.push(
    <CardTextWrapper className={'font-weight-bold'} key={i++} text={'Discount  : '} />
  );
  item_price_details_key.push(
    <CardTextWrapper className={'font-weight-bold'} key={i++} text={'Tax       :  '} />
  );
  item_price_details_key.push(
    <CardTextWrapper className={'font-weight-bold'} key={i++} text={'Total:'} />
  );

  let item_price_details_value = [];
  item_price_details_value.push(
    <CardTextWrapper key={i++} text={'$' + product_price * quantity} />
  );
  item_price_details_value.push(
    <CardTextWrapper key={i++} text={'-$' + ((discount * product_price) / 100) * quantity} />
  );
  item_price_details_value.push(
    <CardTextWrapper key={i++} text={'+$' + ((tax * product_price) / 100) * quantity} />
  );
  item_price_details_value.push(
    <CardTextWrapper
      key={i++}
      text={
        '$' +
        (product_price - (discount * product_price) / 100 + (tax * product_price) / 100) * quantity
      }
    />
  );

  item_details.push(
    <Alert className={' p-0 '} color="info">
      {' '}
      {product_title}{' '}
    </Alert>
  );
  item_details.push(<InputSpinnerContainer id={id} dispatch={dispatch} quantity={quantity} />);
  column_content.push(
    <ColumnWrapper
      key={i++}
      className={'col_one'}
      md={2}
      xs={2}
      sm={2}
      lg={2}
      xl={2}
      data={<CardImgWrapper src={image_url} className="img_fluid img_style" />}
    />
  );
  column_content.push(<ColumnWrapper key={i++} className={'col_two'} data={item_details} />);
  column_content.push(
    <ColumnWrapper key={i++} className={'col_three'} data={item_price_details_key} />
  );
  column_content.push(
    <ColumnWrapper key={i++} className={'col_four'} data={item_price_details_value} />
  );
  column_content.push(
    <ColumnWrapper
      key={i++}
      className={'col_five'}
      data={
        <ButtonWrapper
          buttonText={'X'}
          outline
          color={'danger'}
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
    discount: PropTypes.number,
    tax: PropTypes.number,
    image_url: PropTypes.string,
    product_title: PropTypes.string,
    product_price: PropTypes.number,
    quantity: PropTypes.number,
    id: PropTypes.number
  }),
  dispatch: PropTypes.func.isRequired
};
