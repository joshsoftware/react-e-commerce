import React from 'react';
import { CardImg } from 'reactstrap';
import { PropTypes } from 'prop-types';
const CardImgWrapper = ({ src, top, bottom, className, tag }) => {
  return (
    <CardImg
      top={top}
      bottom={bottom}
      className={className}
      tag={tag}
      src={src}
      alt={'Product Image'}
    />
  );
};
export default CardImgWrapper;
CardImgWrapper.propTypes = {
  src: PropTypes.string.isRequired,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string,
  top: PropTypes.bool,
  bottom: PropTypes.bool
};
