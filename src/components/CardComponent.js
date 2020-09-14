import React from 'react';
import { Card } from 'reactstrap';
import CardBodyWrapper from './CardBodyWrapper';
import CardImgWrapper from './CardImgWrapper';
import CardTitleWrapper from './CardTitleWrapper';
import CardTextWrapper from './CardTextWrapper';
import { PropTypes } from 'prop-types';
import ButtonWrapper from './ButtonWrapper';
import './CartItem.css';

const CardComponent = ({ product, productExists }) => {
  const { image_url, product_title, product_price, stock } = product;
  let body_content = [];
  body_content.push(<CardTitleWrapper title={product_title} />);
  body_content.push(<CardTextWrapper text={'$' + product_price} />);
  let card_content = [];
  card_content.push(<CardImgWrapper className={'cart-image'} src={image_url} />);
  card_content.push(<CardBodyWrapper body_content={body_content} />);
  card_content.push(
    stock <= 0 ? (
      <ButtonWrapper buttonText={'Out of stock'} disabled={true} color={'danger'} />
    ) : (
      <ButtonWrapper buttonText={'Add to Cart'} onClick={() => productExists(product)} />
    )
  );
  return <Card className="h-100">{card_content}</Card>;
};
export default CardComponent;
CardComponent.propTypes = {
  productExists: PropTypes.func.isRequired,
  product: PropTypes.shape({
    image_url: PropTypes.string.isRequired,
    product_title: PropTypes.string.isRequired,
    product_price: PropTypes.number.isRequired,
    quantity: PropTypes.number.isRequired,
    stock: PropTypes.number.isRequired
  }).isRequired
};
