import React from 'react';
import { Button } from 'reactstrap';
import PropTypes from 'prop-types';
const ButtonWrapper = ({ style, onClick, buttonText }) => {
  return (
    <Button className={style} onClick={onClick}>
      {buttonText}
    </Button>
  );
};

export default ButtonWrapper;

ButtonWrapper.propTypes = {
  style: PropTypes.string,
  onClick: PropTypes.func,
  buttonText: PropTypes.string
};
