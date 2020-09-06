import React from 'react';
import PropTypes from 'prop-types';

const ImageComponent = (props) => {
  const { style, src, className, alt } = props;

  return <img style={style} src={src} className={className} alt={alt} />;
};

export default ImageComponent;

ImageComponent.propTypes = {
  style: PropTypes.object.isRequired,
  src: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired
};
