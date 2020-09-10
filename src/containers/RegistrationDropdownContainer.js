import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { setField } from '../actions/formActions';
import DropdownItemWrapper from '../components/DropdownItemWrapper';
import DropdownToggleWrapper from '../components/DropdownToggleWrapper';
import DropdownMenuWrapper from '../components/DropdownMenuWrapper';
import DropDownWrapper from '../components/DropDownWrapper';

const RegistrationDropdownContainer = ({ data, type, dispatch, state, disabled }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen((prevState) => !prevState);
  let arr = [],
    i = 0;
  let arr1 = [];
  let itemFunc = (field_value) => {
    dispatch(setField(type, field_value));
  };
  arr = data.map((field_value) => {
    return (
      <DropdownItemWrapper key={i++} option={field_value} onClick={() => itemFunc(field_value)} />
    );
  });
  arr1.push(<DropdownToggleWrapper caret={true} data={state} />);
  arr1.push(<DropdownMenuWrapper data={arr} />);
  return <DropDownWrapper toggle={toggle} isOpen={dropdownOpen} data={arr1} disabled={disabled} />;
};

export default RegistrationDropdownContainer;

RegistrationDropdownContainer.propTypes = {
  data: PropTypes.array.isRequired,
  type: PropTypes.string.isRequired,
  state: PropTypes.string.isRequired,
  dispatch: PropTypes.func.isRequired,
  disabled: PropTypes.bool
};
