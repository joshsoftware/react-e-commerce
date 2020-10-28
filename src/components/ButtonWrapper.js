import React from 'react';
import { Button } from 'reactstrap';
import PropTypes from 'prop-types';
const ButtonWrapper = ({ style, onClick, buttonText, color, disabled, outline, active }) => {
  return (
    <Button
      className={style}
      active={active}
      onClick={onClick}
      color={color}
      outline={outline}
      disabled={disabled}>
      {buttonText}
    </Button>
  );
};

export default ButtonWrapper;

ButtonWrapper.propTypes = {
  active: PropTypes.bool,
  outline: PropTypes.bool,
  color: PropTypes.string,
  disabled: PropTypes.bool,
  style: PropTypes.string,
  onSubmit: PropTypes.func,
  buttonText: PropTypes.string,
  onClick: PropTypes.func
};
