import React from 'react';
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

const CartItem = ({ item, dispatch }) => {
  const { product_title, product_price, stock, quantity, id } = item;
  let column_content = [];
  let i = 0;
  let item_details = [];
  item_details.push(<CardTitleWrapper key={i++} title={product_title} />);
  item_details.push(<CardTextWrapper key={i++} text={'Price : $ ' + product_price} />);
  item_details.push(
    <CartDropdownContainer id={id} dispatch={dispatch} quantity={quantity} stock={stock} />
  );
  column_content.push(
    <ColumnWrapper
      key={i++}
      className={'col_one'}
      md={3}
      xs={3}
      sm={3}
      lg={3}
      xl={3}
      data={
        <CardImgWrapper
          src={
            'https://assets.ajio.com/medias/sys_master/root/hb7/h8b/15083561943070/-473Wx593H-460422382-black-MODEL.jpg'
          }
          className="img_fluid img_style"
        />
      }
    />
  );
  column_content.push(<ColumnWrapper key={i++} className={'col_two'} data={item_details} />);
  column_content.push(
    <ColumnWrapper
      key={i++}
      className={'col_three'}
      data={<ButtonWrapper buttonText={'X'} onClick={() => dispatch(deleteCartItem(id))} />}
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
    product_title: PropTypes.string,
    product_price: PropTypes.number,
    quantity: PropTypes.number,
    stock: PropTypes.number,
    id: PropTypes.number
  }),
  dispatch: PropTypes.func.isRequired
};
