import React from 'react';
import { Button } from 'reactstrap';
import PropTypes from 'prop-types';
const ButtonWrapper = ({ style, onClick, onSubmit, buttonText, color, disabled }) => {
  return (
    <Button className={style} onClick={onClick} onSubmit={onSubmit} color={color} disabled={disabled}>
      {buttonText}
    </Button>
  );
};

export default ButtonWrapper;

ButtonWrapper.propTypes = {
  color: PropTypes.string,
  disabled: PropTypes.bool,
  style: PropTypes.string,
  onSubmit: PropTypes.func,
  buttonText: PropTypes.string
};
