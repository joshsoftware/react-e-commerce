import React from 'react';
import { Button } from 'reactstrap';
import PropTypes from 'prop-types';
const ButtonWrapper = ({ style, onClick, buttonText, color, disabled }) => {
  return (
    <Button className={style} onClick={onClick} color={color} disabled={disabled}>
      {buttonText}
    </Button>
  );
};

export default ButtonWrapper;

ButtonWrapper.propTypes = {
  color: PropTypes.string,
  disabled: PropTypes.bool,
  style: PropTypes.string,
  onClick: PropTypes.func,
  buttonText: PropTypes.string
};
