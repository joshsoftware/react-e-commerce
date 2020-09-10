import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { setField } from '../actions/formActions';
import DropdownItemWrapper from '../components/DropdownItemWrapper';
import DropdownToggleWrapper from '../components/DropdownToggleWrapper';
import DropdownMenuWrapper from '../components/DropdownMenuWrapper';
import DropDownWrapper from '../components/DropDownWrapper';

const StateDropdownContainer = ({ data, type, dispatch, state, states, setCities, disabled }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen((prevState) => !prevState);
  let arr = [],
    i = 0;
  let arr1 = [];
  let itemFunc = (field_value) => {
    dispatch(setField(type, field_value));
    let ar = [];
    setCities([]);
    dispatch(setField('city', ''));
    states.map((map_state) => {
      if (map_state.name === field_value) {
        map_state.cities.map((map_city) => {
          ar.push(map_city.name);
        });
        return;
      }
    });
    setCities(ar);
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

export default StateDropdownContainer;

StateDropdownContainer.propTypes = {
  data: PropTypes.array.isRequired,
  type: PropTypes.string.isRequired,
  state: PropTypes.string.isRequired,
  states: PropTypes.array.isRequired,
  setCities: PropTypes.func.isRequired,
  dispatch: PropTypes.func.isRequired,
  disabled: PropTypes.bool
};
