import React from 'react';
import { DropdownToggle } from 'reactstrap';
import ImageComponent from './ImageComponent';
import PropTypes from 'prop-types';

const DropdownToggleComponent = (props) => {
  const { src, className, alt } = props;

  return (
    <DropdownToggle nav caret>
      <ImageComponent style={{ width: '50px' }} src={src} className={className} alt={alt} />
    </DropdownToggle>
  );
};

export default DropdownToggleComponent;

DropdownToggleComponent.propTypes = {
  src: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired
};
