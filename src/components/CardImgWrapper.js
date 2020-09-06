import React from 'react';
import { CardImg } from 'reactstrap';
import { PropTypes } from 'prop-types';
const CardImgWrapper = ({ width, src, top, bottom, className, tag }) => {
  return (
    <CardImg
      top={top}
      bottom={bottom}
      tag={tag}
      width={width}
      className={className}
      src={src}
      alt={'Product Image'}
    />
  );
};
export default CardImgWrapper;

CardImgWrapper.propTypes = {
  width: PropTypes.string,
  src: PropTypes.string.isRequired,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string,
  top: PropTypes.bool,
  bottom: PropTypes.bool
};
