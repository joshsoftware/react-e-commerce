import React from 'react';
import { Card, CardFooter } from 'reactstrap';
import CardBodyWrapper from './CardBodyWrapper';
import CardImgWrapper from './CardImgWrapper';
import CardTitleWrapper from './CardTitleWrapper';
import CardTextWrapper from './CardTextWrapper';
import { PropTypes } from 'prop-types';
import ButtonWrapper from './ButtonWrapper';
import { useDispatch, useSelector } from 'react-redux';
import './CartItem.css';
import InputSpinnerContainer from '../containers/InputSpinnerContainer';

const CardComponent = ({ index, product, productExists }) => {
  const dispatch = useDispatch();
  const { cartItemsList } = useSelector((state) => state.cartReducer);
  const { id, image_url, product_title, product_price, stock } = product;
  let body_content = [];
  body_content.push(<CardTitleWrapper className={'font-weight-bold'} title={product_title} />);
  body_content.push(<CardTextWrapper text={'$' + product_price} />);
  let card_content = [];
  card_content.push(
    <CardImgWrapper className={'img_style_card cart-image img-fluid m-20'} src={image_url} />
  );
  card_content.push(<CardBodyWrapper body_content={body_content} />);
  if (index !== -1) {
    card_content.push(
      <CardFooter className={'m-0 p-0 card_footer justify-content-center'}>
        <div className={'d-inline-block px-2 font-weight-bold'}>Set Quantity : </div>
        <InputSpinnerContainer
          id={id}
          quantity={cartItemsList[index].quantity}
          dispatch={dispatch}
        />
      </CardFooter>
    );
  } else {
    if (stock <= 0) {
      card_content.push(
        <ButtonWrapper
          className={'btn_cursor'}
          buttonText={'Out of stock'}
          disabled={true}
          color={'danger'}
        />
      );
    } else {
      card_content.push(
        <ButtonWrapper buttonText={'Add to Cart'} onClick={() => productExists(product)} />
      );
    }
  }
  return <Card className="h-100">{card_content}</Card>;
};
export default CardComponent;
CardComponent.propTypes = {
  index: PropTypes.number,
  productExists: PropTypes.func.isRequired,
  product: PropTypes.shape({
    id: PropTypes.number,
    image_url: PropTypes.string.isRequired,
    product_title: PropTypes.string.isRequired,
    product_price: PropTypes.number.isRequired,
    quantity: PropTypes.number.isRequired,
    stock: PropTypes.number.isRequired
  }).isRequired
};
