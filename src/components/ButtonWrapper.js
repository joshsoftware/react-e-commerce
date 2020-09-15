import React from 'react';
import { Button } from 'reactstrap';
import PropTypes from 'prop-types';
const ButtonWrapper = ({ style, onClick, buttonText, color, disabled, outline }) => {
  return (
    <Button className={style} onClick={onClick} color={color} outline={outline} disabled={disabled}>
      {buttonText}
    </Button>
  );
};

export default ButtonWrapper;

ButtonWrapper.propTypes = {
  outline: PropTypes.bool,
  color: PropTypes.string,
  disabled: PropTypes.bool,
  style: PropTypes.string,
  onSubmit: PropTypes.func,
  buttonText: PropTypes.string,
  onClick: PropTypes.func
};
