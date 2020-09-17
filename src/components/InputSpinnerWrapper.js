import React from 'react';
import { PropTypes } from 'prop-types';

const InputSpinner = ({
  defaultValue,
  size,
  min,
  max,
  spinner,
  value,
  type,
  className,
  step,
  onChange
}) => {
  return (
    <input
      defaultValue={defaultValue}
      size={1}
      type={type}
      min={min}
      max={max}
      spinner={spinner}
      value={value}
      className={className}
      step={step}
      onChange={(evt) => {
        onChange(evt);
      }}></input>
  );
};

export default InputSpinner;

InputSpinner.propTypes = {
  defaultValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  min: PropTypes.number,
  max: PropTypes.number,
  type: PropTypes.string,
  spinner: PropTypes.bool,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  className: PropTypes.string,
  step: PropTypes.number.isRequired,
  onChange: PropTypes.func,
  size: PropTypes.number
};
