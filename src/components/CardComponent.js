import React from 'react';
import { Card } from 'reactstrap';
import CardBodyWrapper from './CardBodyWrapper';
import CardImgWrapper from './CardImgWrapper';
import CardTitleWrapper from './CardTitleWrapper';
import CardTextWrapper from './CardTextWrapper';
import { PropTypes } from 'prop-types';

const CardComponent = ({ product }) => {
  const { image_url, product_title, product_price } = product;

  let body_content = [];
  body_content.push(<CardTitleWrapper title={product_title} />);
  body_content.push(<CardTextWrapper text={'$' + product_price} />);

  return (
    <Card>
      <CardImgWrapper src={image_url} />
      <CardBodyWrapper body_content={body_content} />
    </Card>
  );
};

export default CardComponent;
CardComponent.propTypes = {
  product: PropTypes.shape({
    image_url: PropTypes.string,
    product_title: PropTypes.string.isRequired,
    product_price: PropTypes.number.isRequired
  }).isRequired
};
